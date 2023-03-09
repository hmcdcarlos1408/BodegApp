import React from "react";
import {ImageBackground, StyleSheet, Button, View} from 'react-native';

const image = {uri: 'https://reactjs.org/logo-og.png'};
const Login=()=>{
    return(
        <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
 
          
        </ImageBackground>
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    text: {
      color: '#446784',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000c0',
    },
  });

export default Login;