/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import { Image, View, Text} from 'react-native';
import styled from 'styled-components/native';
import array from '../../utils/array'; 
import AddItem from './AddItem';
import ItemFlatList from './ItemFlatList';
import { SwipeListView } from 'react-native-swipe-list-view'; 
import ListaItemSwipe from './ListaItemSwipe';

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
const deleteItem = (index) => {
let newItems = [...items];
//filter receber no array apenas os q derem verdadeiro:
newItems = newItems.filter((it, i)=> i != index);
setItems(newItems);
}
    return (
        <Page>
            <AddItem onAdd={addNewItem}/>
            <SwipeListView
            data={items}
            renderItem={({item, index})=><ItemFlatList onPress={()=>togleDone(index)} data={item}/>}
            renderHiddenItem={({item, index})=><ListaItemSwipe onDelete={()=>deleteItem(index)}/>} 
            leftOpenValue={50}
            disableLeftSwipe={true}
            />
        </Page> 
    );
  }
   
  