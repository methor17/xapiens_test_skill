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


const textPool = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum mi eu magna fermentum, vel luctus tellus semper. Nunc dignissim eleifend ipsum, nec viverra mauris pellentesque non. Fusce auctor ex id mauris egestas, quis luctus nunc pharetra. Sed in dignissim nisi. Aliquam sed tempor urna, nec aliquam mi. Aenean eu feugiat lacus, vel dictum eros. Nulla condimentum porttitor aliquet. Vestibulum vehicula elit non arcu auctor maximus. Quisque est eros, maximus nec diam faucibus, mollis odio."
const checkString = (inputString) => {
    const upperString = inputString.replace(/[ ,.]/g, "").toUpperCase()
    let obj = {}
    for(let char in upperString){
        if(typeof obj[upperString[char]] === 'undefined'){
            obj[upperString[char]] = 1
        } else {
            obj[upperString[char]]++   
        }
    }
    for(const key in obj) {
        console.log(`Karakter ${key} Sebanyak ${obj[key]}`)
    }
}
const moveChar = (str, num) => {
    let newString = [];
    [...str].forEach((e, i, arr) => {
        let n = (e.charCodeAt() - 'a'.charCodeAt() + num) % 26
        switch(e){
            case ' ' || ',' || '.':
                newString.push(e)
                break
            default: 
                newString.push(String.fromCharCode(n + 'a'.charCodeAt()))
                break
        }
    })
    console.log(newString.join(''))
  }

//menghitung karakter yang sama
checkString(textPool)
//Menggeser 5 karakter setiap karakter(kecuali whitespace, koma, titik)
moveChar(textPool, 5 )
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
