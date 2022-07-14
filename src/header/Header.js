/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import { Button, Text, View, Alert, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

const Header = styled.View`
width: 100%;
height: 60px;
background-color: #CCC;
justity-content: center;
align-items: center;
`;
const HeaderText = styled.Text``;

export default ()=> {
    return(
        
        <Header>
            <HeaderText>Cabeçalho</HeaderText>
        </Header>
    );
}