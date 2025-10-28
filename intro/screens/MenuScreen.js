import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './BotonesScreen';
import TextInputScreen from './TextInputScreen';
import ImageBackgroundScreen from './ImageBackgroundScreen';
import SlapshScreen from './SlapshScreen';
import ScrollViewScreen from './ScrollViewScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import FlatListScreen from './FlatListScreen';
import ModalScreen from './ModalScreen';
import BottomScreen from './BottomScreen';



export default function MenuScreen() {

    const [screen,setScreen]=useState('menu');

    switch(screen){
        case 'contador':
            return <ContadorScreen/>;
        case 'botones':
            return <BotonesScreen/>;
        case 'TextInput':
            return <TextInputScreen/>;
        case 'image': // Cambiado para coincidir con el botón
            return <ImageBackgroundScreen/>;
        case 'slapsh': // Cambiado para coincidir con el botón
            return <SlapshScreen/>;
        case 'scroll': // Cambiado para coincidir con el botón
            return <ScrollViewScreen/>;
        case 'activity': // Cambiado para coincidir con el botón
            return <ActivityIndicatorScreen/>;
        case 'Flat': // Cambiado para coincidir con el botón
            return <FlatListScreen/>;
        case 'modal': // Cambiado para coincidir con el botón
            return <ModalScreen/>;
        case 'bottom': // Cambiado para coincidir con el botón
            return <BottomScreen/>;
        case 'menu':
        default:
            return (
                <View style={styles.container}>
                    <view style={styles.contenedorBotones}>
                    <Text> Menu de practicas </Text>
                    <Button color="blue" onPress={()=>setScreen('contador')} title='Pract:Contador'/> 
                    <Button color="blue" onPress={()=>setScreen('botones')} title='Pract:Buttons'/>
                    <Button color="blue" onPress={()=>setScreen('TextInput')} title='Pract:TextInput'/>
                    <Button color="blue" onPress={()=>setScreen('image')} title='Pract:ImageBackgorund'/>
                    <Button color="blue" onPress={()=>setScreen('slapsh')} title='Pract:Slapsh'/>
                    <Button color="blue" onPress={()=>setScreen('scroll')} title='Pract:ScrollView'/>
                    <Button color="blue" onPress={()=>setScreen('activity')} title='Pract:ActivityIndicator'/>
                    <Button color="blue" onPress={()=>setScreen('Flat')} title='Pract:FlatList'/>
                    <Button color="blue" onPress={()=>setScreen('modal')} title='Pract:Modal'/>
                    <Button color="blue" onPress={()=>setScreen('bottom')} title='Pract:Bottom'/>
                </view>
                </View>
            )
    }
  
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#020202ff',
    alignItems: 'center', // en el eje x
    justifyContent: 'center', // en ele eje y
    },
    contenedorBotones:{
    marginTop:20,
    flexDirection:"column",
    gap:20, 
  },

})
