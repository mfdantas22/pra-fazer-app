import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image,  Touchable } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.viewImagem}>    
      <Image style={styles.img} source={require('./assets/logo-pra-fazer.png')}/>
      </View>
      <View>  
      <TextInput style={styles.input} placeholder='E-mail'></TextInput> 
      </View> 
      <View>      
      <TextInput style={styles.input} placeholder = 'Senha'></TextInput> 
      </View>
      <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Entrar</Text>
      </TouchableOpacity>
      <Text style = {styles.text}>Criar Usuário</Text>
    </View>

  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6600',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    backgroundColor: '#FFF',
    padding: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '100%',
},

input: {
    fontSize: 17,
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 10,
    height: 55,
    width: 400,
    marginBottom: 20,
},
btn: {
    backgroundColor: '#070A52',
    padding: 10,
    borderRadius: 10,
    height: 45,
    width: 400,
    marginBottom: 20,
},
btnText: {
    fontSize: 18, 
    color: '#FFF',
    textAlign: 'center',
},
text: {
  color: '#FFF',
},
img:{
  alignItems: 'center',
  justifyContent: 'center', 
  width:270, 
  height: 47, 
}, 
viewImagem:{
  padding: 20,
}
});