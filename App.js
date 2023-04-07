import { StatusBar } from 'expo-status-bar';
import { Pressable, TextInput } from 'react-native';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';

export default function App() {
  return (
    <View style={[styles.container, styles.shadowProp]}>
       <View>
      <Text style={styles.title}>
        Cadastre-se
      </Text>
      <TextInput
       placeholder='Informe o seu nome...'
       style={[styles.input, styles.shadowProp]}
      ></TextInput>
      <TextInput
       placeholder='Informe o seu e-mail...'
       style={[styles.input, styles.shadowProp]}
      ></TextInput>
      <TextInput
       placeholder='Informe o sua senha...'
       style={[styles.input, styles.shadowProp]}
      ></TextInput>
      <Pressable
        title="Clicar"
        style={[styles.button, styles.shadowProp]}
        onPress={() => Alert.alert('Jamilson Ferreira')}
      >
        <Text style={styles.titleBtn}>Criar</Text>
      </Pressable>
    </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbfbfb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign:'center',
    marginBottom: 20,
    fontSize: 28,
    color: '#000'
  },
  button:{
    color: '#fff',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    width:150,
    backgroundColor:'black',
    marginTop: 10,
    elevation: 3
  },
  input:{
    height: 50,
    width: 350,
    backgroundColor:'#fff',
    borderRadius: 15,
    marginTop:10,
    paddingLeft: 15,
    shadowColor: 1
  },
  titleBtn: {
    color: '#fff'
  },
  shadowProp: {
    shadowColor:'#171717', 
    shadowOffset: {largura:-2, altura: 4}, 
    shadowOpacidade: 0.2, 
    shadowRadius: 3,
  },
  elevation: {
    elevation: 20,
    shadowColor: '#52006A',
  },
});
