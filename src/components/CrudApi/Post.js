/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import { Image, View, Text, SafeAreaView, Button, FlatList, StyleSheet, ActivityIndicator, TextInput} from 'react-native';
import styled from 'styled-components/native';

    
    
const PostApi = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

const handlePost = async () => {
    if(title != '' && body != ''){

        const req = await fetch("https://jsonplaceholder.typicode.com/posts",{
            method: "POST",
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 255
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await req.json();
        alert(`Add ${json.id} - ${json.title} com sucesso!!!`);
        
            
        
    }else{
        alert("PReencha todos os campos!!!")
    }
}
    
    return (
    
   <SafeAreaView style={styles.container}>
    <Text style={styles.inputLabel}>Titulo:</Text>
    <TextInput style={styles.input} value={title} onChangeText={t=>setTitle(t)}/>

    <Text style={styles.inputLabel}>Corpo:</Text>
    <TextInput style={styles.input} value={body} onChangeText={b=>setBody(b)}/>

    <Button title='Send' onPress={handlePost}/>
   </SafeAreaView>
    
    );
  }

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#333',
      padding: 20
    },
    inputLabel:{
      fontSize: 20,
      color: '#FFF',
      marginBottom: 10
    },
    input:{
      backgroundColor: '#555',
      height: 45,
      fontSize: 18,
      color: '#FFF',
      paddingLeft: 10,
      paddingRight: 10,
      marginBottom: 30,
      borderRadius: 5
    }
  });
  
  export default PostApi;