import { Usuario } from '../models/usuario';
import DatabaseService from '../database/DatabaseService';

export class UsuarioController {
  constructor() {
    this.listeners = [];
  }
  async initialize() {
    console.log('[UsuarioController] initialize - DatabaseService:', typeof DatabaseService);
    await DatabaseService.initialize();
  }

  async actualizarUsuario(id, nombre) {
    try {
      Usuario.validar(nombre);
      const result = await DatabaseService.update(id, nombre.trim());
      this.notifyListeners();
      return result;
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
      throw error;
    }
  }

  async eliminarUsuario(id) {
    try {
      const result = await DatabaseService.remove(id);
      this.notifyListeners();
      return result;
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
      throw error;
    }
  }

  
  async obtenerUsuarios() {
    try {
   
      const data = await DatabaseService.getAll();
      return data.map(u => new Usuario(u.id, u.nombre, u.fecha_creacion));
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      throw new Error('No se pudieron cargar los usuarios');
    }
  }

  async crearUsuario(nombre) {
    try {
      console.log('[UsuarioController] crearUsuario - DatabaseService:', typeof DatabaseService, DatabaseService ? Object.keys(DatabaseService) : DatabaseService);
      Usuario.validar(nombre);

      const nuevoUsuario = await DatabaseService.add(nombre.trim());
      this.notifyListeners();

      
      return new Usuario(
        nuevoUsuario.id,
        nuevoUsuario.nombre,
        nuevoUsuario.fecha_creacion
      );
    } catch (error) {
      console.error('Error al crear usuario:', error);
      throw error;
    }
  }

  
  addListener(callback) {
    this.listeners.push(callback);
  }

  
  removeListener(callback) {
    this.listeners = this.listeners.filter(l => l !== callback);
  }

  notifyListeners() {
    this.listeners.forEach(callback => callback());
  }
}