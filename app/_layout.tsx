import {Slot} from 'expo-router';
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {Box, Center, extendTheme, NativeBaseProvider, StatusBar} from "native-base";
import React from "react";
import AppBar from "../components/AppBar";
import {ImageBackground, StyleSheet} from "react-native";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

const customTheme = extendTheme({config});
export default function Layout() {
  const bgImage = require('../assets/BackgroundImage.jpg');

  return (

    // <SafeAreaProvider>
    //
    // </SafeAreaProvider>

    <SafeAreaView style={{flex: 1}}>
      <NativeBaseProvider theme={customTheme}>
        <StatusBar backgroundColor="black" barStyle="light-content"/>
        <AppBar/>
        <ImageBackground source={bgImage} style={styles.image}>
          <Center flex={1}>
            <Slot/>
          </Center>
        </ImageBackground>
      </NativeBaseProvider>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%'
  }
});