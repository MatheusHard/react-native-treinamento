/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import { Image, View, Text, SafeAreaView, Button, FlatList, StyleSheet, ActivityIndicator, TextInput} from 'react-native';

    
    const LoginSimpless = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [status, setStatus] = useState('');
    const [showCupom, setShowCupom] = useState(false);

    const handleLogin = async () => {

      setStatus('');
      setShowCupom(false);

      const req = await fetch("https://api.b7web.com.br/loginsimples/",{
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const json = await req.json();

      if(json.status == 'ok'){
        setStatus('Acesso permitido'+json.status);
        setShowCupom(true);
      }else{
        setStatus('Acesso negado!!!');
        setShowCupom(false);
        }
      }

    
      return (
    
   <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Desconto</Text>

        <TextInput 
                style={styles.input}
                placeholder="seu e-mail"
                value={email}
                onChangeText={e=>setEmail(e)}/>
        <TextInput 
                style={styles.input}
                placeholder="sua senha"
                value={password}
                secureTextEntry={true}
                onChangeText={p=>setPassword(p)} />
        <Button title='Verificar' onPress={handleLogin}/>

        <Text style={styles.status}>{status}</Text>
  {showCupom &&
        <View style={styles.cumpomArea}>
            <Text style={styles.cumpomTitle}>Codigo Promo: </Text>
            <Text style={styles.cumpomCode}>JFHHT99</Text>
        </View>
    }
   </SafeAreaView>

    
    );
  }

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#333',
      padding: 20
    },
    header:{
     color: '#FFF',   
     fontSize: 25,
     textAlign: 'center'  
    },
    input:{
      height: 45,
      fontSize: 18,
      color: '#FFF',
      backgroundColor: '#555',
      paddingLeft: 10,
      paddingRight: 10,
      marginBottom: 20,
      borderRadius: 5
    },
    status: {
        margin: 50,
        color: '#FFF',
        fontSize: 18,
        textAlign: 'center'
    },
    cumpomArea:{
        backgroundColor: '#FFF',
        borderRadius: 5,
        padding: 30
    },
    cumpomTitle:{
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20
    },
    cumpomCode:{
        textAlign: 'center',
        fontSize: 40
    }
  });
  
  export default LoginSimpless;