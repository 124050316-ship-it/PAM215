import { Text, StyleSheet, View, FlatList, SectionList, ScrollView } from 'react-native'
import React, { Component } from 'react'

export default function FlatListScreen(){
  const datos = [
    { id: '1', nombre: 'manzana' },
    { id: '2', nombre: 'platano' },
    { id: '3', nombre: 'naranja' },
    { id: '4', nombre: 'uva' },
    { id: '5', nombre: 'fresa' },
    { id: '6', nombre: 'sandia' },
  ]
  const secciones = [
    {
      titulo: 'Frutas',
      data: [
        {nombre: 'manzana'},
        {nombre: 'platano'},
        {nombre: 'naranja'},
        {nombre: 'uva'},
      ]
    },
    {
      titulo:'Verduras',
      data:[
        {nombre:'zanahoria'},
        {nombre:'lechuga'},
        {nombre:'tomate'},
        {nombre:'brocoli'}
      ]
    }
  ]
    return (
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.Titulo}> Ejemplo de FlatList</Text>
          <FlatList 
          data={datos}
          keyExtractor={(item) => item.id}
          renderItem={({item})=>(
            <View style={styles.elementos}>
              <Text style={styles.text}> {item.nombre} </Text>
            </View>
          )}
          scrollenable={false}
          ItemSeparatorComponent={() => <View style={styles.separador}/>}
          ></FlatList>
          <Text style={styles.Titulo2}>Ejemplo de SectionList</Text>

          <SectionList
          sections={secciones}
          keyExtractor={(item, index) => item.nombre + index}
          renderItem={({item})=>(
            <View style={styles.itemSeccion}>
              <Text style={styles.textItem}>
                {item.nombre}
              </Text>
            </View>
          )}
          renderSectionHeader={({section: {titulo}})=>(
            <View style={styles.encabezado}>
              <Text style={styles.tituloSeccion}>{titulo}</Text>
            </View>
          )}
          scrollEnabled={false}
          stickySectionHeadersEnabled={false}
          />
        </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#cbcbcbff',
  },
  content:{
    padding:20,
    paddingBottom:40,
  },
  Titulo:{
    fontSize:30,
    fontweight:'bold',
    marginBottom:20,
    marginTop:20,
    textAlign:'center',
    color:'#000000ff',
  },
  Titulo2:{
    fontSize:30,
    fontweight:'bold',
    marginBottom:20,
    marginTop:20,
    textAlign:'center',
    color:'#000000ff',
  },
  elementos:{
    width:'100%',
    height:80,
    backgroundColor:'#9000ffff',
    justifyContent:'center',
    alignItems:'center',
    marginVertical:5,
    borderRadius:15,
    shadowColor:'#000000ff',
    shadowOffset:{width:0, height:3},
    shadowOpacity:0.3,
    shadowRadius:4,
    elevation:5,
  },
  text:{
    fontSize:20,
    fontFamily:'Times New Roman',
    color:'#ffffffff',
    fontWeight:'900',
    textDecorationLine:'underline',
  },
  separador:{
    height:10,
  },
  encabezado:{
    backgroundColor:'#269d38ff',
    padding: 15,
    borderRadius:12,
    marginTop:10,
    marginBottom:10,
    shadowColor:'#000000ff',
    shadowOffset:{width:0, height:2},
    shadowOpacity:0.25,
    shadowRadius:3.84,
    elevation:5,
  },
  tituloSeccion:{
    fontSize:22,
    fontWeight:'bold',
    color:'#ffffffff',
    textAlign:'center',
    fontFamily:'Times New Roman'
  },
  itemSeccion:{
    backgroundColor:'#34c759ff',
    padding:15,
    marginVertical:5,
    borderRadius:10,
    marginLeft:10,
    shadowColor:'#000000ff',
    shadowOffset:{width:0, height:2},
    shadowOpacity:0.2,
    shadowRadius:2,
    elevation:3,
  },
  textItem:{
    fontSize:18,
    color:'#ffffffff',
    fontWeight:'700',
    fontFamily:'Times New Roman',
  } 
})