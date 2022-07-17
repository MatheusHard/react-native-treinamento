/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Page = styled.SafeAreaView`
    flex: 1;
    align-items: center;`;
const Input  = styled.TextInput`
    font-size: 15px;
    height: 50px;
    width: 90%;
    border-radius: 5px;
    border: 1px solid #000;
    padding: 10px;
`;

const Salvar = styled.Button`
padding: 20px;
`;

const Nome =styled.Text`
font-size: 18px;`;

const NameArea = styled.View`
padding: 20px;
background-color: #CCC;
width: 100%`;

    
    
export default () => {

    const [name, setName] = useState('');
    const [newName, setNewName] = useState('');
   
    const handleSave = async () => {
        if(newName != '') await AsyncStorage.setItem("@name", newName);
        setName(newName);
        setNewName('');
    }


const getName = async () => {
const n = await AsyncStorage.getItem("@name");
setName(n);
}

useEffect(()=>{
getName();
}, []);

return (
    
        <Page>
            <Input 
                placeholder="Digite seu nome"
                value={newName}
                onChangeText={e=>setNewName(e)}/>
        <Salvar title="Salvar" onPress={handleSave}/>

        <NameArea>
            <Nome>{`Nome: ${name}`}</Nome>
        </NameArea>
        </Page>
        
        );
  }
   
  