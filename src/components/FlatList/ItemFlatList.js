/* eslint-disable react/self-closing-comp */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import { Image, View, Text} from 'react-native';
import styled from 'styled-components/native';

   
    

const Item = styled.TouchableOpacity`
padding: 10px;
background-color: #CCC;
flex-direction: row;`
;

    const ItemText= styled.Text`
    font-size: 15px
    flex: 1;`;

    const ItemCheck = styled.View`
    width: 20px;
    height: 20px;
    border-radius: 10px;
    border: 5px solid #FFF;
    background-color: ${props=>props.status ? '#FFFFFF' : 'transparent'};
    `;

export default (props) => {
   
        return (
                <Item onPress={props.onPress} activeOpacity={0.8}>
                    <>
                        <ItemText> {`Nome: ${props.data.nome} ${props.data.status}`}</ItemText>
                        <ItemText> {`Idade: ${props.data.age}`}</ItemText>
                        <ItemCheck status={props.data.status}></ItemCheck>
                    </>
                  </Item>
        );
               
    
  }
   
  