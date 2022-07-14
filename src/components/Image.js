/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import { Image, View, Text } from 'react-native';
import styled from 'styled-components/native';


export default () => {
    const [status, setStatus] = useState('');

    return(
//source={require('../images/homer.jpg')} style={{width: 100, height: 100}}

            <View>
            <Image 
                source={{uri: 'https:\\www.google.com.br/google.jpg'}}
                style={{width: 100, height: 100}}
                resizeMode="stretch"
                defaultSource={require('../images/homer.jpg')}
                onLoadStart={()=>setStatus('Loading...')}
                onLoad={()=>setStatus('Loaded!')}
                onError={(e)=>setStatus(e.nativeEvent.error)}
                onProgress={(e)=>e.nativeEvent.total}/>
                <Text>{status}</Text>
        </View>
    );
}