import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Button, Alert } from 'react-native';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 3000);
  }, []);

  const scrollRef = useRef();

  const VerIngredientes = () => {
    Alert('Ingredientes', ingredientes);
  };

  if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashText}>CocinApp</Text>
      </View>
    );
  }

  return (
    <ImageBackground 
      source={require('./assets/Comida.jpg')}
      resizeMode='cover'
      style={styles.background}
    >
      <ScrollView 
        ref={scrollRef}
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={true}
      >
        <Text style={styles.header}>Mis Recetas</Text>
        
        <View style={styles.recetario}>
          <Text style={styles.tituloReceta}>Huevo a la mexicana</Text>
          <Text style={styles.tiempoReceta}>15 minutos</Text>
          <Text style={styles.textoReceta}>Preparación: Picar el jitomate, la cebolla y el chile serrano. Calentar el aceite en un sarten, agregar la cebolla y el chile, sofreir por 2 minutos. Agregar el jitomate y cocinar por 5 minutos. Batir los huevos con sal al gusto e incorporarlos al sarten. Cocinar revolviendo constantemente hasta que los huevos queden cocidos.</Text>
          <Button
            color='#ff6347'
            title='Ver Ingredientes'
            onPress={() => VerIngredientes(
              'Huevo a la mexicana',
              'huevos\n 2 jitomates\n 1/2 cebolla\n 2 chiles serranos\n Aceite\n Sal al gusto'
            )}
          />
        </View>

        <View style={styles.recetario}>
          <Text style={styles.tituloReceta}>Pollo Enchipotado</Text>
          <Text style={styles.tiempoReceta}>30 minutos</Text>
          <Text style={styles.textoReceta}>Preparación: Sazonar las pechugas de pollo con sal y pimienta. En una sarten calentar un poco de aceite y dorar las pechugas por ambos lados. En una licuadora, mezclar los chiles chipotles, el tomate, la cebolla y el ajo hasta obtener una salsa. Verter la salsa sobre el pollo en el sarten y cocinar a fuego medio durante 20 minutos o hasta que el pollo esté bien cocido.</Text>
          <Button
            color='#ff6347'
            title='Ver Ingredientes'
            onPress={() => VerIngredientes(
              'Pollo Enchipotado',
              '4 pechugas de pollo\n 3 chiles chipotles\n 2 tomates\n 1 cebolla\n 3 dientes de ajo\n Sal y pimienta\n Aceite'
            )}
          />
        </View>

        <View style={styles.recetario}>
          <Text style={styles.tituloReceta}>Ensalada Cesar</Text>
          <Text style={styles.tiempoReceta}>20 minutos</Text>
          <Text style={styles.textoReceta}>Preparación: Lavar y cortar la lechuga romana en trozos pequeños. En un tazón grande mezclar la lechuga con el aderezo Cesar. Agregar crutones y queso parmesano rallado al gusto. Mezclar suavemente y servir inmediatamente.</Text>
          <Button
            color='#ff6347'
            title='Ver Ingredientes'
            onPress={() => VerIngredientes(
              'Ensalada César',
              '• 1 lechuga romana\n• Aderezo César\n• Crutones\n• Queso parmesano rallado\n•'
            )}
          />
        </View>

        <View style={styles.recetario}>
          <Text style={styles.tituloReceta}>Tacos de Carnitas</Text>
          <Text style={styles.tiempoReceta}>2 horas</Text>
          <Text style={styles.textoReceta}>Preparación: Cortar la carne de cerdo en trozos medianos y sazonar con sal, pimienta. Agregar cebolla, ajo y jugo de naranja. Servir en tortillas con cebolla picada, cilantro y salsa.</Text>
          <Button
            color='#ff6347'
            title='Ver Ingredientes'
            onPress={() => VerIngredientes(
              'Tacos de Carnitas',
              ' 1 kg carne de cerdo\n Tortillas\n 1 cebolla\n 4 dientes de ajo\n Jugo de 2 naranjas\n Cilantro\n Sal, pimienta y especias\n Aceite'
            )}
          />
        </View>
      </ScrollView>
      <StatusBar style="light" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#ff6347',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashText: {
    color: 'white',
    fontSize: 48,
    fontWeight: 'bold',
  },
  background: {
    flex: 1,
    backgroundColor: '#f50000ff',
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  recetario: {
    width: '100%',
    backgroundColor: 'rgba(90, 118, 243, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
    padding: 15,
  },
  tituloReceta: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  tiempoReceta: {
    color: '#FFD700',
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 10,
  },
  textoReceta: {
    color: 'white',
    fontSize: 14,
    textAlign: 'justify',
    marginBottom: 15,
    lineHeight: 20,
  },
});