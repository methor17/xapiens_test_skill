import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
const zeroSuffix = (num) => {
    const digitArr = Array.from(String(num))
    let zeroLeft = digitArr.length -1 
    let zeroToAdd = ""
    for(let i in digitArr){
        for(let j = 0; j < zeroLeft; j++){
            zeroToAdd += "0"
        }
        console.log(digitArr[i] + zeroToAdd)
        zeroLeft--
        zeroToAdd = ""
    }
}
//menambah kan 0
zeroSuffix(1234567)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
