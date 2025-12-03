import { Text, StyleSheet, View, Modal, Pressable, TextInput } from 'react-native'
import React, {useState} from 'react'

export default function ModalScreen(){

  const [mostrar, setMostrar] = useState(null);

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Bienvenido</Text>

        <Pressable style={styles.boton} onPress={()=> setMostrar('login')}>
          <Text style={styles.text}>Iniciar Sesion</Text>
        </Pressable>

        <Pressable style={styles.boton} onPress={()=> setMostrar('registro')}>
          <Text style={styles.text}>Registrarse</Text>
        </Pressable>

        <Pressable style={styles.boton} onPress={()=> setMostrar('alerta')}>
          <Text style={styles.text}>Alerta</Text>
        </Pressable>

        <Modal 
        animationType='slide'
        transparent={false}
        visible={mostrar === 'login'}
        onRequestClose={()=> setMostrar(null)}
        >
          <View style={styles.container2}>
            <Text style={styles.titulo}>Formulario de Inicio de Sesión</Text>
            <TextInput placeholder='Ingrese su Usuario' style={styles.input}/>
            <TextInput placeholder='Ingrese su Contraseña' securityTextEntry={true} style={styles.input}/>
            <Pressable style={styles.boton} onPress={()=> setMostrar(null)}>
              <Text style={styles.text}>Iniciar Sesión</Text>
            </Pressable>
          </View>
        </Modal>

        <Modal 
        animationType='slide'
        transparent={false}
        visible={mostrar === 'registro'}
        onRequestClose={()=> setMostrar(null)}
        >
          <View style={styles.container2}>
            <Text style={styles.titulo}>Formulario de Registro</Text>
            <TextInput placeholder='Ingrese su Usuario' style={styles.input}/>
            <TextInput placeholder='Ingrese su Email' keyboardType={'email-address'} style={styles.input}/>
            <TextInput placeholder='Ingrese su Contraseña' securityTextEntry={true} style={styles.input}/>
            <Pressable style={styles.boton} onPress={()=> setMostrar(null)}>
              <Text style={styles.text}>Registrarse</Text>
            </Pressable>
          </View>
        </Modal>

        <Modal
        animationType='fade'
        transparent={false}
        visible={mostrar === 'alerta'}
        onRequestClose={()=>setMostrar(null)}>
          <View style={styles.container3}>
            <View style={styles.containerAlerta}>
              <Text style={styles.textAlerta}>Esto es una Alerta</Text>
              <View style={styles.containerBoton}>
                <Pressable style={styles.boton1} onPress={()=> setMostrar(null)}>
                  <Text style={styles.text}>Ok</Text>
                </Pressable>

                <Pressable style={styles.boton2} onPress={()=> setMostrar(null)}>
                  <Text style={styles.text}>Borrar</Text>
                </Pressable>

              </View>
            </View>
          </View>        
        </Modal>
      </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#000000ff'
  },
  container2:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#000000ff'
  },
  container3:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#000000ff',
  },
  boton:{
    backgroundColor:'#2505ddff',
    padding:15,
    borderRadius:20,
    marginBottom:15,
    width:'70%',
    alignItems:'center',
  },
  text:{
    color:'#ffffff',
    fontSize:15,
    fontWeight:'500',
  },
  titulo:{
    color:'#ffffffff',
    fontSize:25,
    marginBottom:20,
  },
  input:{
    width:'80%',
    borderWidth:1,
    borderColor:'#999999',
    borderRadius:10,
    marginBottom:20,
    padding:15,
    backgroundColor:'#ffffff'
  },
  containerAlerta:{
    width:300,
    height:200,
    backgroundColor:'#ffffff',
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
  },
  textAlerta:{
    fontSize:20,
    color:'#000000',
  },
  boton1:{
    backgroundColor:'#2400eeff',
    padding:15,
    borderRadius:20,
    marginRight:10,
    width:100,
    alignItems:'center',
  },
  boton2:{
    backgroundColor:'#13ce4eff',
    padding:15,
    borderRadius:20,
    marginRight:10,
    width:100,
    alignItems:'center',
  },
  containerBoton:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:25,
    width:'80%'
  }
})