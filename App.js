/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';

import AlertComponent from './src/components/AlertComponent';
import ContaPaga from './src/components/ContaPaga';
import FlatList from './src/components/FlatList/FlatList';
import Image from './src/components/Image';
import ListView from './src/components/ListView';
import Header from './src/header/Header';

const Page = styled.SafeAreaView`
flex: 1;
justity-content: center;
align-items: center;
`;

export default () =>{

  return(
    <FlatList/>
    /*
    <ListView/>
    <Page>
       <AlertComponent/> 
       <Header/>
      <ContaPafga/> 
      <Image/>      

    </Page>*/

    
  );
}