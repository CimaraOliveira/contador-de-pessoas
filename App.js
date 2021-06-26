import { StatusBar } from 'react-native';
import React, { useState } from 'react';
 import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
 
  
 export default function App(){
     const [count, setCount] = useState(0);
     
     function aumentar() {
      setCount(count + 1);  
    }
    function diminuir() {
      setCount(count - 1);  
    }
  
    return (
      <View style={styles.container}>  
        <Text style={styles.textStyle}>Contador de Pessoas</Text>  
        <View style={styles.box}>
        <Text style={styles.text}>{count}</Text>
        </View>
        <View style={styles.button}>
        <TouchableOpacity styles={styles.button} onPress={aumentar}>
          <Text style={styles.buttonStyle}>+</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.button}>
        <TouchableOpacity styles={styles.button} onPress={diminuir}>
          <Text style={styles.buttonStyle}>-</Text>
        </TouchableOpacity>
        </View>
      </View>  
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#6A5ACD',      
    },
   
    text: {
      top: 6,
      fontSize: 30,
      margin: 25,
      color: '#000000',
      textAlign: 'center',
      marginTop:5,
        
    },

    box: {
      height:90,
      margin:30,
      left:50,      
      top:10, 
      marginTop: 10,
      borderRadius:20,
      backgroundColor: '#fffaf0',
      justifyContent: 'center',
      width:200,  
    },

    buttonStyle: {
      fontSize: 40,
      margin: 15,
      width: 300,
      top: 5,
      marginTop:10,
      color: '#fffaf0',
      textAlign: 'center',  
    },

    button: {
      alignItems:'center',
      width:200,
      height:100,
      margin:30,
      left:50,
      marginTop:1,
      backgroundColor: '#483D8B',
      justifyContent: 'center',
      padding: 10,
      
  
    },

    textStyle: {
      top: 5,
      fontSize: 30,
      margin: 15,
      marginTop: 10,
      color: '#fffaf0',
       textAlign: 'center',
  
    },
   

   });
 
 