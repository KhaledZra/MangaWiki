import {Slot} from 'expo-router';
import { StyleSheet } from 'react-native';
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'grey' }}>
        <StatusBar style="auto" />
        <Slot />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});