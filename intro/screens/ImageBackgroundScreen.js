import React, { useRef, useState, useEffect } from 'react';
import { Text, StyleSheet, View, ImageBackground, Animated, Easing } from 'react-native';


export default function ImageBackgroundScreen() {
    const [cargando, setCargando] = useState(true);
    const desvanecido = new Animated.Value(1);


    useEffect(()=>{
        const timer = setTimeout(()=>{
            Animated.timing(desvanecido,{
                toValue:0,
                duration:800,
                easing:Easing.out(Easing.ease),
                useNativeDriver:true,
            }).start(()=>setCargando(false));
        }, 2000);
        return () => clearTimeout(timer);
    },[]);


    if(cargando){
        return(
            <Animated.View style={[styles.splashContainer, {opacity:desvanecido}]}>
            <ImageBackground
            source={require('../assets/Dulce.jpg')}
            resizeMode='contain'
            style={styles.splashImage}
            >
                <Text style={styles.splashText}>Cargando...</Text>
            </ImageBackground>
            </Animated.View>
        );
    }




    return (
        <ImageBackground
        source={require('../assets/FondoGato.jpg')}
         resizeMode='cover'
         style={styles.background}
         >
        <Text style={styles.texto}>Bienvenido a mi App!</Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    texto: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    splashContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        
    },
    splashImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
       
    },
    splashText: {
        position: 'absolute',
        marginBottom: 60,
        color: '#000',
        fontSize: 20,
    },
});