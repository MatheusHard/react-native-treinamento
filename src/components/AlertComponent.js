/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import { Button, Text, View, Alert, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

export default () => {

  const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;`;
  const createThreeButtonAlert = () =>

  Alert.alert(
    "Alert Title",
    "My Alert Msg",
    [
      {
        text: "Salvar",
        onPress: () => console.log("Ask me later pressed")
      },
      {
        text: "Cancelar",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      }
    ]
  );

  return (
      <Button title={"3-Button Alert"} onPress={createThreeButtonAlert} />

  );
}
 


