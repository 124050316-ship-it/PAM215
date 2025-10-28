
//1. imports: Zona de importaciones 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from "react";

//2. Main: Zona de componentes
export default function App() {
  
  const[contador, setContador]=useState(0);

  return (

    <View style={styles.container}>

      <Text style={styles.texto}>Contador:</Text>
      <Text style={styles.texto2}>{contador}</Text>
      
      <View style={styles.contenedorBotones}>
      <Button color="green" title="Increamentar" onPress={()=>setContador(contador+1)}> </Button>
      <Button color="yellow" title="Quitar" onPress={()=>setContador(contador-1)}></Button>
      <Button color="red" title="Reiniciar" onPress={()=>setContador((0))}></Button>
      </View>

      <StatusBar style="auto" />

    </View>


  );
}


//3. Estilos: Zona de estilos y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37cbe6ff',
    alignItems: 'center', // en el eje x
    justifyContent: 'center', // en ele eje y
  },
  texto:{
    fontFamily:"Times New Roman",
    fontSize:30,
    color:'#080808ff',
    frontWeight:'bold',
    fontStyle:'italic',
    textDecorationLine:'line-through',
  },
  texto2:{
    fontFamily:"Courier",
    fontSize:40,
    color:'#d73ffdff',
    frontWeight:'500',
    textDecorationLine:'underline',
  },
  contenedorBotones:{
    marginTop:20,
    flexDirection:"row",
    gap:15, 
  },


});
