/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import { Image, View, Text} from 'react-native';
import styled from 'styled-components/native';
import array from '../utils/array';

const Page = styled.SafeAreaView`
    flex: 1;`;
    
    const Scrow = styled.ScrollView`
    flex 1;`;
    

    const Item = styled.TouchableOpacity`
    padding: 10px;
    background-color: #CCC;
    flex-direction: row;`
    ;

    const ItemText= styled.Text`
    font-size: 15px
    flex: 1;`;

    const Radio = styled.View`
    width: 20px;
    height: 20px;
    border-radius: 10px;
    border: 5px solid #FFF;
    `;

export default () => {

   
    return (
        <Page>
            <Scrow>
                {array.map((item, index) =>{
                   return ( 
                   <Item key={index}  onPress={()=>{}} activeOpacity={0.8}>
                       
                        
                        <ItemText> {`Nome: ${item.nome}`}`</ItemText>
                        <ItemText>{`Idade: ${item.age}`}</ItemText>
                        <Radio></Radio>
                        
                    </Item>
                );
                })}
            </Scrow>
        </Page> 
    );
  }
   
  