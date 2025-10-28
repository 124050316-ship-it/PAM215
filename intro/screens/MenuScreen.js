import { Text, StyleSheet, View, Button } from 'react-native'import { Text, StyleSheet, View, Button } from 'react-native'

import React, { useState } from 'react'import React, { useState } from 'react'

import ContadorScreen from './ContadorScreen';import ContadorScreen from './ContadorScreen';

import BotonesScreen from './BotonesScreen';import BotonesScreen from './BotonesScreen';

import TextInputScreen from './TextInputScreen';import TextInputScreen from './TextInputScreen';

import ImageBackgroundScreen from './ImageBackgroundScreen';import ImageBackgroundScreen from './ImageBackgroundScreen';

import SlapshScreen from './SlapshScreen';import SlapshScreen from './SlapshScreen';

import ScrollViewScreen from './ScrollViewScreen';import ScrollViewScreen from './ScrollViewScreen';

import ActivityIndicatorScreen from './ActivityIndicatorScreen';import ActivityIndicatorScreen from './ActivityIndicatorScreen';

import FlatListScreen from './FlatListScreen';import FlatListScreen from './FlatListScreen';

import ModalScreen from './ModalScreen';import ModalScreen from './ModalScreen';

import BottomScreen from './BottomScreen';import BottomScreen from './BottomScreen';

import Repaso1Screen from './Repaso1Screen';import Repaso1Screen from './Repaso1Screen';



export default function MenuScreen() {

    const [screen,setScreen]=useState('menu');

export default function MenuScreen() {

    switch(screen){

        case 'contador':    const [screen,setScreen]=useState('menu');

            return <ContadorScreen/>;

        case 'botones':    switch(screen){

            return <BotonesScreen/>;        case 'contador':

        case 'TextInput':            return <ContadorScreen/>;

            return <TextInputScreen/>;        case 'botones':

        case 'image':             return <BotonesScreen/>;

            return <ImageBackgroundScreen/>;        case 'TextInput':

        case 'slapsh':             return <TextInputScreen/>;

            return <SlapshScreen/>;        case 'image': 

        case 'scroll':             return <ImageBackgroundScreen/>;

            return <ScrollViewScreen/>;        case 'slapsh': 

        case 'activity':             return <SlapshScreen/>;

            return <ActivityIndicatorScreen/>;        case 'scroll': 

        case 'Flat':             return <ScrollViewScreen/>;

            return <FlatListScreen/>;        case 'activity': 

        case 'modal':             return <ActivityIndicatorScreen/>;

            return <ModalScreen/>;        case 'Flat': 

        case 'bottom':             return <FlatListScreen/>;

            return <BottomScreen/>;        case 'modal': 

        case 'Repaso1':            return <ModalScreen/>;

            return <Repaso1Screen/>;        case 'bottom': 

        case 'menu':            return <BottomScreen/>;

        default:        case 'Repaso1':

            return (            return <Repaso1Screen/>;

                <View style={styles.container}>        case 'menu':

                    <View style={styles.contenedorBotones}>        default:

                    <Text> Menu de practicas </Text>            return (

                    <Button color="blue" onPress={()=>setScreen('contador')} title='Pract:Contador'/>                 <View style={styles.container}>

                    <Button color="blue" onPress={()=>setScreen('botones')} title='Pract:Buttons'/>                    <View style={styles.contenedorBotones}>

                    <Button color="blue" onPress={()=>setScreen('TextInput')} title='Pract:TextInput'/>                    <Text> Menu de practicas </Text>

                    <Button color="blue" onPress={()=>setScreen('image')} title='Pract:ImageBackgorund'/>                    <Button color="blue" onPress={()=>setScreen('contador')} title='Pract:Contador'/> 

                    <Button color="blue" onPress={()=>setScreen('slapsh')} title='Pract:Slapsh'/>                    <Button color="blue" onPress={()=>setScreen('botones')} title='Pract:Buttons'/>

                    <Button color="blue" onPress={()=>setScreen('scroll')} title='Pract:ScrollView'/>                    <Button color="blue" onPress={()=>setScreen('TextInput')} title='Pract:TextInput'/>

                    <Button color="blue" onPress={()=>setScreen('activity')} title='Pract:ActivityIndicator'/>                    <Button color="blue" onPress={()=>setScreen('image')} title='Pract:ImageBackgorund'/>

                    <Button color="blue" onPress={()=>setScreen('Flat')} title='Pract:FlatList'/>                    <Button color="blue" onPress={()=>setScreen('slapsh')} title='Pract:Slapsh'/>

                    <Button color="blue" onPress={()=>setScreen('modal')} title='Pract:Modal'/>                    <Button color="blue" onPress={()=>setScreen('scroll')} title='Pract:ScrollView'/>

                    <Button color="blue" onPress={()=>setScreen('bottom')} title='Pract:Bottom'/>                    <Button color="blue" onPress={()=>setScreen('activity')} title='Pract:ActivityIndicator'/>

                    <Button color="blue" onPress={()=>setScreen('Repaso1')} title='Pract:Repaso1'/>                    <Button color="blue" onPress={()=>setScreen('Flat')} title='Pract:FlatList'/>

                </View>                    <Button color="blue" onPress={()=>setScreen('modal')} title='Pract:Modal'/>

                </View>                    <Button color="blue" onPress={()=>setScreen('bottom')} title='Pract:Bottom'/>

            )                    <Button color="blue" onPress={()=>setScreen('Repaso1')} title='Pract:Repaso1'/>

    }                </View>

}                </View>

            )

const styles = StyleSheet.create({    }

    container: {  

        flex: 1,}

        backgroundColor: '#f0f0f0',

        alignItems: 'center',const styles = StyleSheet.create({

        justifyContent: 'center',    container: {

    },    flex: 1,

    contenedorBotones:{    backgroundColor: '#f0f0f0',

        marginTop:20,    alignItems: 'center', // en el eje x

        flexDirection:"column",    justifyContent: 'center', // en ele eje y

        gap:20,     },

    },    contenedorBotones:{

})    marginTop:20,
    flexDirection:"column",
    gap:20, 
  },

})
