/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import { Modal } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
flex: 1;
justify-content: center;
align-items: center;
background-color: #EEE;
`;
const Box = styled.View`
width: 100%;
height: 100%;
background-color: rgba(0,0,0,0.5);
justify-content: center;
align-items: center;

`;
const Butao = styled.Button``;

const BoxBody = styled.View`
width: 90%;
height: 200px;
background-color: #FFF;
border-radius: 10px;

`;


export default () => {
    const [modalVisible, setModalVisible] = useState(false);


    return (
        <Page>
            <Butao title="View Modal" onPress={()=>setModalVisible(true)}/>
            <Modal 
                    visible={modalVisible}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={()=>setModalVisible(false)}
                    >
                    <Box>
                        <BoxBody>
                            <Butao title="sair" onPress={()=>setModalVisible(false)}/>
                        </BoxBody>
                    </Box>
                </Modal>
        </Page>

           );
}