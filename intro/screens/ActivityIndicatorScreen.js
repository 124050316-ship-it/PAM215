import { Text, StyleSheet, View, Button, ActivityIndicator} from 'react-native'
import React, { useState } from 'react';

export default function ActivityIndicatorScreen(){
 const [loading, setLoading] = useState(false);

 const startLoading = () => {
  setLoading(true);
  setTimeout(()=> setLoading(false), 3000)
};
if (loading){
  return (
  <View style={styles.container}>
    <View style={styles.loaderContainer}>
      <ActivityIndicator
      size="large"
      color="#8e0707ff"
      animating={true}
      hidesWhenStopped={true}
      />
      <Text style={styles.texto}>Cargando...</Text>
    </View>
  </View>
  );
}
return (
  <View style={styles.container}>
    <Text style={styles.title}>ActivityIndicator</Text>
    <Button color='red'title="Carga de datos" onPress={startLoading}/>
  </View>
);
}

const styles = StyleSheet.create({
   container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000ff',
   },
   texto:{
    color: '#ffffffff',
   },
   title:{
    fontSize:20,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:20,
    color:'#ffffffff',
   },
   loaderContainer:{
    alignItems:'center',
   },
});