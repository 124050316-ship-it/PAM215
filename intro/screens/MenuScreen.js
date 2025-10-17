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
        case 'Image':
            return <ImageBackgroundScreen/>;
        case 'Slapsh':
            return <SlapshScreen/>;
        case 'ScrollView':
            return <ScrollViewScreen/>;
        case 'ActivityIndicatorScreen':
            return <ActivityIndicatorScreen/>;
        case 'FlatListScreen':
            return <FlatListScreen/>;
        case 'ModalScreen':
            return <ModalScreen/>;
        case 'BottomScreen':
            return <BottomScreen/>;
        case 'menu':
        default:
            return (
                <View>
                    <Text> Menu de practicas </Text>
                    <Button onPress={()=>setScreen('contador')} title='Pract:Contador'/> 
                    <Button onPress={()=>setScreen('botones')} title='Pract:Buttons'/>
                    <Button onPress={()=>setScreen('TextInput')} title='Pract:TextInput'/>
                    <Button onPress={()=>setScreen('Image')} title='Pract:ImageBackgorund'/>
                    <Button onPress={()=>setScreen('Slapsh')} title='Pract:Slapsh'/>
                    <Button onPress={()=>setScreen('ScrollView')} title='Pract:ScrollView'/>
                    <Button onPress={()=>setScreen('ActivityIndicatorScreen')} title='Pract:ActivityIndicator'/>
                    <Button onPress={()=>setScreen('FlatListScreen')} title='Pract:FlatList'/>
                    <Button onPress={()=>setScreen('ModalScreen')} title='Pract:Modal'/>
                    <Button onPress={()=>setScreen('BottomScreen')} title='Pract:Bottom'/>
                </View>
            )
    }
  
}

const styles = StyleSheet.create({})