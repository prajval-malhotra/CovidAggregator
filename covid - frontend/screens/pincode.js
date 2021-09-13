import { useState } from 'react';
import React from 'react';
import { StyleSheet, TextInput, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

export default function Pincode() {

  const [pincode, setPincode] = useState();

  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.container}>
        <TextInput
            style={styles.input} 
            placeholder='enter pincode'
            keyboardType="numeric"
            onChangeText={(pin) => setPincode(pin)}
        />
        <TouchableOpacity 
            style={styles.button}>
            <Text>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
      flex: 1,
      alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
      height: '15%',
      paddingBottom: 10,
      width: '50%',
      borderRadius: 6,
      backgroundColor: 'lightgrey',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      elevation: 10,
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    fontSize: 17,
    width: '68%',
    textAlign: 'center',
  },
  button: {
      paddingTop: 17,
  },
});
