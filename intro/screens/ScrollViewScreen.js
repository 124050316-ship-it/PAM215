import {Text, StyleSheet, View, ScrollView, Button} from 'react-native';
import React, {useState, useRef} from 'react';

export default function ScrollViewScreen() {
    const scrollRef= useRef();

    const irAlFinal=() => {
        scrollRef.current.scrollToEnd({animated:true});
    }


    return (
        <ScrollView 
        style={styles.container}
        contentContainerStyle={styles.content}
        showsHorizontalScrollIndicator={true}
        
        >

            <Text style={styles.Titulo}>Practica: ScrollView</Text>
            <Text style={styles.Titulo2}>Ejemplo de desplazamiento vertical</Text>

            <View style={styles.elementos}>
                <Text style={styles.text}>Elemento 1</Text>
            </View>

            <View style={styles.elementos}>
                <Text style={styles.text}>Elemento 2</Text>
            </View>

            <View style={styles.elementos}>
                <Text style={styles.text}>Elemento 3</Text>
            </View>

            <View style={styles.elementos}>
                <Text style={styles.text}>Elemento 4</Text>
            </View>

            <View style={styles.elementos}>
                <Text style={styles.text}>Elemento 5</Text>
            </View>

            <Text style={styles.Titulo2}>Ejemplo desplazamiento horizontal</Text>
            <ScrollView
            horizontal
            nestedScrollEnabled={true}
            style={styles.scrollhorizontal}
            showsHorizontalScrollIndicator={true}
            >
                <View style={styles.elementos}>
                <Text style={styles.text}>Cuadro 1</Text>
            </View>

            <View style={styles.elementos}>
                <Text style={styles.text}>Cuadro 2</Text>
            </View>

            <View style={styles.elementos}>
                <Text style={styles.text}>Cuadro 3</Text>
            </View>

            <View style={styles.elementos}>
                <Text style={styles.text}>Cuadro 4</Text>
            </View>

            <View style={styles.elementos}>
                <Text style={styles.text}>Cuadro 5</Text>
            </View>

            <View style={styles.elementos}>
                <Text style={styles.text}>Cuadro 6</Text>
            </View>

            <View style={styles.elementos}>
                <Text style={styles.text}>Cuadro 7</Text>
            </View>

            <View style={styles.elementos}>
                <Text style={styles.text}>Cuadro 8</Text>
            </View>

            <View style={styles.elementos}>
                <Text style={styles.text}>Cuadro 9</Text>
            </View>

            <View style={styles.elementos}>
                <Text style={styles.text}>Cuadro 10</Text>
            </View>

            <View style={styles.elementos}>
                <Text style={styles.text}>Cuadro 11</Text>
            </View>

            <View style={styles.elementos}>
                <Text style={styles.text}>Cuadro 12</Text>
            </View>
            
            </ScrollView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container :{
        backgroundColor: '#f0f0f0',
    },

    content: {
        padding: 20,
        paddingBottom: 40,
    },

    Titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#f0f0f0',
        textAlign: 'center',
    },

    Titulo2: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'center',
    },

    elementos: {
        width: '100%',
        height: 100,
        backgroundColor: '#4CAF50',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 10,
    },

    elementos2: {
        width: 120,
        height: 120,
        backgroundColor: '#28e62eff',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        borderRadius: 10,
    },

    text: {
        fontSize: 10,
        fontFamily: 'Courier',
        color: '#000000ff',
        fontWeight: '900',
        textDecorationLine: 'underline',
    },

    scrollhorizontal: {
        marginVertical: 10,
        width: '100%',
    },
})