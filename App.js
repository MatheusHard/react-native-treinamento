/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';

import AlertComponent from './src/components/AlertComponent';
import AsyncStorage from './src/components/AsyncStorage';
import ContaPaga from './src/components/ContaPaga';
import FlatList from './src/components/FlatList/FlatList';
import Image from './src/components/Image';
import ListView from './src/components/ListView';
import Modal from './src/components/Modal';
import Header from './src/header/Header';
import PostApi from './src/components/CrudApi/Post';
import LoginSimpless from './src/components/LoginSimples';
import { NavigationContainer } from '@react-navigation/native';


const Page = styled.SafeAreaView`
flex: 1;
justity-content: center;
align-items: center;
`;

export default () =>{

  return(
    <LoginSimpless/>
    /*<PostApi/>
    <Movies/>
    <Modal/>
    <AsyncStorage/>
    <FlatList/>
    
    <ListView/>
    <Page>
       <AlertComponent/> 
       <Header/>
      <ContaPafga/> 
      <Image/>      

    </Page>*/

    
  );
}