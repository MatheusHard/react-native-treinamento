/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import { Image, View, Text} from 'react-native';
import styled from 'styled-components/native';
import array from '../../utils/array'; 
import AddItem from './AddItem';
import ItemFlatList from './ItemFlatList';

 const Page = styled.SafeAreaView`
    flex: 1;`;
    
    const FlatList = styled.FlatList`
    flex 1;`;

export default () => {

const [items, setItems] = useState(array);
   
const addNewItem = (item) => {
    
    if(item.trim() != ''){

        let newItems = [...items];
        newItems.push({
            id: 6,
            nome: item.trim(),
            age: 100
        });
        setItems(newItems);
    }else{
    alert("Digite algo");
    }
}

const togleDone = (index) => {
    
    let newItems = [...items];
    newItems[index].status = !newItems[index].status;
    setItems(newItems); 
}
    return (
        <Page>
            <AddItem onAdd={addNewItem}/>
            <FlatList
            data={items}
            renderItem={({item, index})=><ItemFlatList onPress={()=>togleDone(index)} data={item}/>}
            />
        </Page> 
    );
  }
   
  