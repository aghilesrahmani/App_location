import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet,TouchableOpacity, Text, View, ImageBackground, Alert,Image, Button, TextInput} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>

    <Text style={styles.txt} color='black'>Location de Voiture</Text>
    
    <ImageBackground source={require('/Users/antoine/essai2/voiture.jpg')}
      style={styles.img}
    ></ImageBackground>
   
   
    
    <TextInput style={styles.iputBox} placeholder='Email' placeholderTextColor='white'></TextInput>

    <TextInput style={styles.iputBox} placeholder='Password' secureTextEntry placeholderTextColor='white'></TextInput>

    <Text style={styles.txt}> Location de Voiture</Text>


    <TouchableOpacity
        style={styles.button}
        //onPress={onPress}
      >
        <Text style={styles.txt1}>LogIn</Text>
      </TouchableOpacity>
    </View>

    
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
  