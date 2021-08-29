import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity } from 'react-native';

const { width: WIDTH } = Dimensions.get('window')

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Welcome}>
        Login To My App
      </Text>
      <TextInput
        style={styles.input}
        placeholder={'Username'}
        placeholderTextColor={'rgba(255,255,255,0.7)'}
       
      /> 
      <TextInput
        style={styles.input}
        placeholder={'Password'}
        secureTextEntry
        placeholderTextColor={'rgba(255,255,255,0.7)'}
        
      /> 
      <View styles={styles.btnContainer}>
      <TouchableOpacity styles={styles.userBtn} onPress={() => alert("Login Works")}>
        <Text styles={styles.btnTxt}>Login</Text>
      </TouchableOpacity>
      
      </View>
    </View>
     );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'black',
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 10,
  },
  welcome: {
    fontSize:30,
    textAlign: 'center',
    margin: 10,
    color: '#fff'
  
    },
    btnContainer: {
      flexDirection: "row",
      justifyContent: "space-between"
    }, 
    userBtn: {
      backgroundColor: "#FFD700",
      padding: 15,
      width: "45%",

    },
    btnTxt: {
      fontSize: 10,
      textAlign: "center"
    }
});
