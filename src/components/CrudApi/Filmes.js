/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import { Image, View, Text, SafeAreaView, Button, FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';

    
    
const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);


    const handleLoadButton = async ()  => {
        setLoading(true);
        const req = await fetch("https://api.b7web.com.br/cinema/");
        const json = await req.json();
        
        if(json){
            setMovies(json);
        }
        setLoading(false);
      
}

const reqMovies = async ()  => {
    setLoading(true);
    const req = await fetch("https://api.b7web.com.br/cinema/");
    const json = await req.json();
    
    if(json){
        setMovies(json);
    }
    setLoading(false);
      
}

useEffect(()=>{
    reqMovies();
    }, []);
    
   
    return (
    
    <SafeAreaView style={styles.container}>
        <Button title='Carregar Movies' onPress={handleLoadButton}/>
       {loading &&
       <View style={styles.loadArea}>
        <ActivityIndicator size="large" color="#FFF"/>
        <Text style={styles.loadText}></Text>
       </View>
       }
       {!loading &&
        <>
        <Text style={styles.totalMovies}>Count Movies: {movies.length}</Text>
        <FlatList
         style={styles.list}
         data={movies}
         renderItem={({item})=>(
           <View style={styles.movieItem}>
            <Image 
                source={{uri: item.avatar}} 
                style={styles.movieImage}
                resizeMode="contain"/>
                <Text style={styles.movieTitle}>{item.titulo}</Text>
            
           </View>
            
         )}
         keyExtractor={item => item.titulo}/>
         </>}
    </SafeAreaView>
    
    );
  }
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333'
    },
    totalMovies: {
        color: '#FFF',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    list: {
        flex: 1
    },
    movieItem: {
        marginBottom: 30
    },
    movieImage:{
        height: 200
    },
    movieTitle: {
        color: '#FFF',
        fontSize: 24,
        textAlign: 'center',
        marginTop: 5
    },
    loadArea:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadText: {
        color: '#FFF'
    }
});
  
   export default Movies;
  