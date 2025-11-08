import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Buttom, ImageBackground, ScrollView } from 'react-native';
import {useRef} from 'react-native';

export default function App() {

  const scroollRef =useRef();
  const irALFinal = () => {
    scroollRef.current.scrollToEnd({animated: true});
  }

  return (
      <ScrollView ref={scroollRef} style={styles.container} contentContainerStyle={styles.content}showsVerticalScrollIndicator={true}>
        <ImageBackground source={require('../assets/Trabajo.jpg')}
        resizeMode='cover'
          style={styles.background}>
          <Text>Bienvenido a Gestion de tareas</Text>
        </ImageBackground>
      <View>
        <Buttom  color='blue' title='Ir al final' onPress={irALFinal}/>
      </View>
      <StatusBar style="auto" />
    <View style={styles.elemento}>
      <Text style={styles.texto}>Trabajo</Text>
      <Text style={styles.texto}>7/11/2025</Text>
    </View>
    <View style={styles.elemento}>
      <Text style={styles.texto}>Personal</Text>
      <Text style={styles.texto}>7/11/2025</Text> 
    </View>
    <View style={styles.elemento}>
      <Text style={styles.texto}>Estudios</Text>
      <Text style={styles.texto}>7/11/2025</Text>
    </View>
    <View style={styles.elemento}>
      <Text style={styles.texto}>Hogar</Text>
      <Text style={styles.texto}>7/11/2025</Text>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  content:{
    padding:20,
    paddingBottom:40,
  },
  elemento:{
    width:'100%',
    height:100,
    backgroundColor: '#e6f08bff',
    justifyContent:'center',
    alignItems:'center',
    marginVertical:10,
    borderRadius:10,
  },
  titulo: {
    fontSize:26,
    fontWheight:'bold',
    marginTop:20,
    marginBottom:10,
    textAlign:'center',
    color:'fffffff',
  },
    texto:{
    fontSize:16,
    fontFamily:'Courier',
    color:'#fcfcfcff',
    fontWeight:'900',
    textDecorationLine:'underline'
  },
  background:{
    flex: 1,
    width: '100%',
    height:'100%',
  },
});
