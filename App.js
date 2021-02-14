import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet,TouchableOpacity, Text, View, ImageBackground, Alert,Image, Button, TextInput} from 'react-native';
import navigation from 'react-native';

import * as Animatable from 'react-native-animatable';

export default function App() {
  return (
    <Animatable.View style={styles.container} animation='fadeInUpBig' >

    
    <ImageBackground 
    source={require('/Users/antoine/essai2/voiture.jpg')}
      style={styles.img}
    ></ImageBackground>
   
   
    
    <TextInput style={styles.iputBox} 
    placeholder='Email' 
    placeholderTextColor='white' 
    keyboardType='email-address' 
    returnKeyType='next'
    autoCorrect={true}></TextInput>

    <TextInput style={styles.iputBox} placeholder='Password' secureTextEntry placeholderTextColor='white' returnKeyType='go'></TextInput>

    <Animatable.Text style={styles.txt} animation=''> Location de Voitures</Animatable.Text>


    <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('scree2')}
      >
        <Text style={styles.txt1} a href="/Users/antoine/essai2/screen2.js">LogIn</Text>
      </TouchableOpacity>
     

    </Animatable.View>
    
    

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },

  img:{
    width:'100%',
    height:'100%',
    resizeMode:'cover',
    position:'absolute',
    justifyContent:'center',
    

  },

  png:{
bottom:200,
    width:'50%',
    height:'50%'
  },

  txt:{
    fontWeight:'bold',
    fontSize:25,
    bottom:380,
    color:'black'
    
  },
  iputBox:{
    bottom:30,
    fontSize:25,
    backgroundColor:'black',
    color:'white',
    width:300,
    height:60,
    textAlign:'center',
    marginVertical:10,
    borderRadius:29,
    marginTop:0,
    borderColor:'white'
  },
  button:{
    bottom:-1,
    padding:10,
    //backgroundColor:'red',
    borderRadius:10,
    fontSize:30,
  },

  txt1:{
    bottom:65,
    fontSize:30,
    fontWeight:'bold'
  }
  
});
  