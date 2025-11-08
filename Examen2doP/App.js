import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Buttom, ImageBackground, ScrollView } from 'react-native';

export default function App() {

  const scroollRef =useRef();
  const irALFinal = () => {
    scroollRef.current.scrollToEnd({animated: true});
  }

  return (
      <ScrollView ref={scroollRef} style={styles.container} contentContainerStyle={styles.content}showsVerticalScrollIndicator={true}>
        <Text>Gestion de tareas</Text>
      <View>
        <Buttom  color='blue' title='Ir al final' onPress={irALFinal}/>
      </View>
      <StatusBar style="auto" />
    <View style={styles.elemento}>
      <Text style={styles.texto}></Text>
    </View>
    <View style={styles.elemento}>
      <Text style={styles.texto}></Text> 
    </View>
    <View style={styles.elemento}>
      <Text style={styles.texto}></Text>
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
});
