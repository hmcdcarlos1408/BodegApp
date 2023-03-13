import React from "react";
import {ImageBackground, StyleSheet, Button, View} from 'react-native';
import { Link ,NativeBaseProvider} from 'native-base';

const image = {uri: 'https://reactjs.org/logo-og.png'};
const Login=()=>{
    return(
        <NativeBaseProvider>
        <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Button/>
        <Link href="https://nativebase.io">
        Click here to open documentation.
      </Link>
        </ImageBackground>
      </View>
      </NativeBaseProvider>
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
      color: 'Red',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000c0',
    },
  });

export default Login;

