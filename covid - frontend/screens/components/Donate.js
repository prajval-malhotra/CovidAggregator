import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TouchableOpacity, SafeAreaView, StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default function Donate() {

    const [ name, setName ] = useState()
    const [ item, setItem ] = useState()
    const [ description, setDescription ] = useState()
    const [ number, setNumber ] = useState('')

    const postData = () => {
        console.log('ALMSOT POST------')
        const postObject = {
                    name: name,
                    item: item,
                    description: description,
                    number: number,
                    }
        console.log(postObject)
        axios
        .post('https://resources-api-unique.herokuapp.com/api/resources', postObject)
        .then(response => {
            console.log(response)
            setName('')
            setItem('')
            setDescription('')
            setNumber('')
        })
        
    }

    return ( 
        <SafeAreaView style={styles.container}>
        <View><Text style={styles.title}>Enter the details:</Text></View>

             <View><Text style={styles.heading}>Name:</Text></View>
                 <TextInput 
                 placeholder="Name"
                 onChangeText={(text)=>{setName(text)}}
                 style={styles.input}
                 value={name}
             />

            <View><Text style={styles.heading}>Item:</Text></View>
                <TextInput 
                placeholder="Item"
                onChangeText={(text)=>{setItem(text)}}
                style={styles.input}
                value={item}
            />

            <View><Text style={styles.heading}>Description:</Text></View>
                <TextInput 
                placeholder="Description"
                onChangeText={(text)=>{setDescription(text)}}
                style={styles.input}
                value={description}
            />

            <View><Text style={styles.heading}>Number:</Text></View>
                <TextInput 
                placeholder="Number"
                onChangeText={(text)=>{setNumber(text)}}
                keyboardType = 'numeric'
                value={number}
                style={styles.input}
            />
                <TouchableOpacity style={styles.button}
                onPress={
                    () => postData()
                }>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>

        </SafeAreaView>
        
     );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f5df',
      paddingTop: '15%',
      paddingLeft: '5%'
    },
    content: {
      padding: 40,
    },
    title: {
        textAlign: 'left',
        paddingRight: 20,
        fontSize: 25,
        // fontFamily: 'montserrat-extrabold',
    },
    heading: {
      textAlign: 'left',
      paddingRight: 20,
      fontSize: 18,
      // textDecorationLine: 'underline',
      // fontFamily: 'montserrat-extrabold',
    },
    list: {
      marginTop: 20,
      paddingBottom: 10,
    },
    endSpace: {
      position: 'absolute',
      paddingBottom: 10,
    },
    button: {
        height: '8%',
        width: '40%',
        borderColor: 'black',
        justifyContent: 'center',
        marginLeft: '50%',
        backgroundColor: 'red',
        borderRadius: 13,
        elevation: 2,
    },
    buttonText: {
        textAlign: 'center',
    },
    input: {
        height: 40,
        paddingLeft: 6,
        // underlineColor: 'black',
        borderBottomWidth: 0.85,
    },
  });
