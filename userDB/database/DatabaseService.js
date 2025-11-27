import { Platform } from 'react-native';
import * as SQLite from 'expo-sqlite';

class DatabaseService {
  constructor() {
    this.db = null;
    this.storageKey = 'usuarios';
    this.useMemoryFallback = false;
    this._memoryUsers = [];
    this.initialized = false;
    this._initializing = false;
  }

  // Ensure the DB is initialized. If not, call initialize() which creates the table.
  async ensureDB() {
    if (Platform.OS === 'web') return;
    if (this.db) return;
    if (this.initialized && !this._initializing) return;
    try {
      console.log('[DatabaseService] ensureDB: database not open, calling initialize()');
      await this.initialize();
      console.log('[DatabaseService] ensureDB: initialize() completed');
    } catch (err) {
      console.warn('[DatabaseService] ensureDB error:', err);
    }
  }

  async initialize() {
    if (this.initialized) return;
    if (Platform.OS === 'web') {
      console.log('[DatabaseService] initialize — web (LocalStorage)');
      this.initialized = true;
      return;
    }

    this._initializing = true;
    console.log('[DatabaseService] initialize — sqlite');
    // Prefer synchronous openDatabase, otherwise await async variant if available
    try {
      if (SQLite && typeof SQLite.openDatabase === 'function') {
        this.db = SQLite.openDatabase('miapp.db');
      } else if (SQLite && typeof SQLite.openDatabaseAsync === 'function') {
        // some environments expose an async opener
        this.db = await SQLite.openDatabaseAsync('miapp.db');
      } else if (SQLite && SQLite.default && typeof SQLite.default.openDatabase === 'function') {
        this.db = SQLite.default.openDatabase('miapp.db');
      } else {
        console.warn('[DatabaseService] sqlite openDatabase not available; falling back to in-memory storage for testing');
        this.useMemoryFallback = true;
        this.db = null;
        return;
      }
    } catch (err) {
      console.warn('[DatabaseService] error opening sqlite DB:', err);
      console.warn('[DatabaseService] falling back to in-memory storage for testing');
      this.useMemoryFallback = true;
      this.db = null;
      this.initialized = true;
      this._initializing = false;
      return;
    }

    // If opener returned a Promise (unexpected), await it
    if (this.db && typeof this.db.then === 'function') {
      try {
        this.db = await this.db;
      } catch (err) {
        console.warn('[DatabaseService] awaiting db promise failed:', err);
        this.useMemoryFallback = true;
        this.db = null;
        this.initialized = true;
        this._initializing = false;
        return;
      }
    }

    // Validate the db object has transaction
    if (!this.db || typeof this.db.transaction !== 'function') {
      console.warn('[DatabaseService] opened db does not expose transaction. Falling back to in-memory. DB:', this.db);
      this.useMemoryFallback = true;
      this.db = null;
      this.initialized = true;
      this._initializing = false;
      return;
    }

    this.initialized = true;
    this._initializing = false;

    // Crear tabla si no existe
    await new Promise((resolve, reject) => {
      this.db.transaction(
        (tx) => {
          tx.executeSql(
            `CREATE TABLE IF NOT EXISTS usuarios (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              nombre TEXT NOT NULL,
              fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP
            );`,
            []
          );
        },
        (err) => reject(err),
        () => resolve()
      );
    });
  }

  async getAll() {
    if (Platform.OS === 'web') {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    }

    if (this.useMemoryFallback) {
      return this._memoryUsers.slice().reverse();
    }
    await this.ensureDB();
    if (!this.db) throw new Error('Database not initialized (getAll)');

    return await new Promise((resolve, reject) => {
      this.db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM usuarios ORDER BY id DESC',
          [],
          (_, result) => resolve(result.rows._array),
          (_, err) => reject(err)
        );
      }, reject);
    });
  }

  async add(nombre) {
    if (Platform.OS === 'web') {
      const usuarios = await this.getAll();
      const nextId = usuarios.length === 0 ? 1 : Math.max(...usuarios.map(u => Number(u.id))) + 1;
      const nuevoUsuario = { id: nextId, nombre, fecha_creacion: new Date().toISOString() };
      usuarios.unshift(nuevoUsuario);
      localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
      return nuevoUsuario;
    }

    await this.ensureDB();
    if (this.useMemoryFallback) {
      const nextId = this._memoryUsers.length === 0 ? 1 : Math.max(...this._memoryUsers.map(u => Number(u.id))) + 1;
      const nuevo = { id: nextId, nombre, fecha_creacion: new Date().toISOString() };
      this._memoryUsers.push(nuevo);
      return nuevo;
    }
    if (!this.db) throw new Error('Database not initialized (add)');
    // For sqlite try to use insertId; if not available, compute next id via MAX(id)
    return await new Promise((resolve, reject) => {
      this.db.transaction((tx) => {
        tx.executeSql(
          'INSERT INTO usuarios (nombre) VALUES(?)',
          [nombre],
          async (_, result) => {
            try {
              let id = null;
              if (result && (result.insertId || result.insertId === 0)) {
                id = result.insertId;
              }
              if (id == null) {
                // fallback: query max(id)
                tx.executeSql('SELECT MAX(id) as maxId FROM usuarios', [], (_, r2) => {
                  const maxId = r2.rows._array && r2.rows._array[0] && r2.rows._array[0].maxId;
                  const next = (maxId == null) ? 1 : Number(maxId);
                  resolve({ id: next, nombre, fecha_creacion: new Date().toISOString() });
                }, (_, err) => reject(err));
              } else {
                resolve({ id, nombre, fecha_creacion: new Date().toISOString() });
              }
            } catch (err) {
              reject(err);
            }
          },
          (_, err) => reject(err)
        );
      }, reject);
    });
  }

  async update(id, nombre) {
    if (Platform.OS === 'web') {
      const usuarios = await this.getAll();
      const idx = usuarios.findIndex((u) => u.id === id);
      if (idx === -1) throw new Error('Usuario no encontrado');
      usuarios[idx].nombre = nombre;
      localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
      return { id, nombre, fecha_creacion: usuarios[idx].fecha_creacion };
    }

    await this.ensureDB();
    if (this.useMemoryFallback) {
      const idx = this._memoryUsers.findIndex(u => u.id === id);
      if (idx === -1) throw new Error('Usuario no encontrado');
      this._memoryUsers[idx].nombre = nombre;
      return { id, nombre, fecha_creacion: this._memoryUsers[idx].fecha_creacion };
    }
    if (!this.db) throw new Error('Database not initialized (update)');

    return await new Promise((resolve, reject) => {
      this.db.transaction((tx) => {
        tx.executeSql(
          'UPDATE usuarios SET nombre = ? WHERE id = ?',
          [nombre, id],
          (_, result) => {
            if (result.rowsAffected && result.rowsAffected > 0) resolve({ id, nombre });
            else reject(new Error('No se pudo actualizar el usuario'));
          },
          (_, err) => reject(err)
        );
      }, reject);
    });
  }

  async remove(id) {
    if (Platform.OS === 'web') {
      const usuarios = await this.getAll();
      const newUsers = usuarios.filter((u) => u.id !== id);
      localStorage.setItem(this.storageKey, JSON.stringify(newUsers));
      return true;
    }

    await this.ensureDB();
    if (this.useMemoryFallback) {
      this._memoryUsers = this._memoryUsers.filter(u => u.id !== id);
      return true;
    }
    if (!this.db) throw new Error('Database not initialized (remove)');

    return await new Promise((resolve, reject) => {
      this.db.transaction((tx) => {
        tx.executeSql(
          'DELETE FROM usuarios WHERE id = ?',
          [id],
          (_, result) => resolve(result.rowsAffected > 0),
          (_, err) => reject(err)
        );
      }, reject);
    });
  }
}

export default new DatabaseService();