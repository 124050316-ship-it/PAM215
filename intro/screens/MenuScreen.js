import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './BotonesScreen';
import TextInputScreen from './TextInputScreen';
import ImageBackgroundScreen from './ImageBackgroundScreen';
import SlapshScreen from './SlapshScreen';
import ScrollViewScreen from './ScrollViewScreen';
import ActivityIndicatorScreen from './ActivotyIndicatorScreen';
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
        case 'ScroollView':
            return <ScrollViewScreen/>;
        case 'ActivityIndicarorScreen':
            return <ActivityIndicatorScreen/>;
        case 'FlatListScreen':
            return <FlatListScreen/>;
        case 'ModalScreen':
            return <ModalScfreen/>;
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
                    <Button onPress={()=>setScreen('image')} title='Pract:ImageBackgorund'/>
                    <Button onPress={()=>setScreen('slapsh')} title='Pract:Slapsh'/>
                    <Button onPress={()=>setScreen('scroll')} title='Pract:ScrollView'/>
                    <Button onPress={()=>setScreen('activity')} title='Pract:ActivityIndicator'/>
                    <Button onPress={()=>setScreen('Flat')} title='Pract:FlatList'/>
                    <Button onPress={()=>setScreen('modal')} title='Pract:Modal'/>
                    <Button onPress={()=>setScreen('bottom')} title='Pract:Bottom'/>
                    </View>
                )
    }
  
}

const styles = StyleSheet.create({})