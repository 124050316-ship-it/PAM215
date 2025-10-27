import React, { useState } from 'react';
import { Text, StyleSheet, View, ImageBackground, TextInput, Switch, TouchableOpacity, Alert } from 'react-native';

export default function Repaso1Screen() {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [aceptaTerminos, setAceptaTerminos] = useState(false);

    const showMessage = (title, message) => {
        
        Alert.alert(title, message, [{ text: 'OK' }]);
    };

    const validarYRegistrar = () => {
        console.log('Validando datos...');

        if (!nombre.trim() || !email.trim()) {
            showMessage('Error', 'Por favor completa todos los campos');
            return;
        }

        if (!aceptaTerminos) {
            showMessage('Error', 'Debes aceptar los términos y condiciones');
            return;
        }

        showMessage('¡Registro Exitoso!', `Se han registrado los siguientes datos:\n\nNombre: ${nombre}\nEmail: ${email}`);

        
        setNombre('');
        setEmail('');
        setAceptaTerminos(false);
    };

    return (
        <ImageBackground
            source={require('../assets/FondoPlaya.jpeg')}
            resizeMode='cover'
            style={styles.background}
        >
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nombre completo"
                        placeholderTextColor="#666"
                        value={nombre}
                        onChangeText={setNombre}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Correo electrónico"
                        placeholderTextColor="#666"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <View style={styles.terminosContainer}>
                        <Switch
                            value={aceptaTerminos}
                            onValueChange={setAceptaTerminos}
                            thumbColor={aceptaTerminos ? '#4CAF50' : '#f4f3f4'}
                            trackColor={{ false: '#767577', true: '#81c784' }}
                        />
                        <Text style={styles.terminosTexto}>
                            Acepto los términos y condiciones
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={styles.botonRegistro}
                        onPress={validarYRegistrar}
                    >
                        <Text style={styles.textoBoton}>Registrarse</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    inputContainer: {
        width: '100%',
        maxWidth: 400,
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderRadius: 12,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: 'rgba(255,255,255,0.95)',
        borderRadius: 10,
        marginBottom: 15,
        paddingHorizontal: 15,
        fontSize: 16,
    },
    terminosContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
    },
    terminosTexto: {
        color: '#fff',
        marginLeft: 10,
        fontSize: 16,
    },
    botonRegistro: {
        backgroundColor: '#4CAF50',
        width: '100%',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    textoBoton: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
