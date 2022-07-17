/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import { Image, View, Text} from 'react-native';
import styled from 'styled-components/native';
import array from '../../utils/array'; 
import ItemFlatList from './ItemFlatList';

const AddItemArea = styled.View`
    background-color: #CCC;
    padding: 10px;`;
const AddItem  = styled.TextInput`
    background-color: #FFF;
    font-size: 15px;
    height: 50px;
    border-radius: 5px;
    padding: 10px;
`;
    
    
export default (props) => {

    const [item,setItem] = useState('');

    const handleSubmit = () =>{
    if(item.trim() != ''){
        props.onAdd(item);
        setItem('');
    }
      
          
    }
   
    return (
    <AddItemArea>
        <AddItem 
            placeholder="Digite aqui"
            value={item}
            onChangeText={e=>setItem(e)}
            onSubmitEditing={handleSubmit}
            returnKeyType="send"/>
    </AddItemArea>
        );
  }
   
  