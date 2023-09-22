import {Slot} from 'expo-router';
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {Box, extendTheme, NativeBaseProvider, StatusBar} from "native-base";
import React from "react";
import AppBar from "../components/AppBar";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

const customTheme = extendTheme({config});
export default function Layout() {
  return (
    // <SafeAreaProvider>
    //
    // </SafeAreaProvider>

    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <NativeBaseProvider theme={customTheme}>
        <AppBar/>
        <Box flex={1} alignItems="center" justifyContent="center" bg={"#000614"}>
          <Slot/>
        </Box>
      </NativeBaseProvider>
    </SafeAreaView>
  );
}