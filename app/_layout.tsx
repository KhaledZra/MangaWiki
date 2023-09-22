import {Slot} from 'expo-router';
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import {NativeBaseProvider} from "native-base";
import React from "react";

export default function Layout() {
  return (
    // <SafeAreaProvider>
    //
    // </SafeAreaProvider>

    <SafeAreaView style={{ flex: 1, backgroundColor: 'grey' }}>
      <StatusBar style="auto" />
      <NativeBaseProvider>
        <Slot />
      </NativeBaseProvider>
    </SafeAreaView>
  );
}