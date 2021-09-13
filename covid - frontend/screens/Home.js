import React from 'react';
import { StyleSheet, Button, TextInput, FlatList, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import VaccineList from './components/vaccineList'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function Home() {

    const onPressHandler = (navigation) => {
        navigation.navigate('give_resources')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.buttons}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => onPressHandler()}
                    >
                        <Text style={styles.buttonText}>Find Resources</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Give Resources</Text>
                    </TouchableOpacity>
            </View>

            <View style={styles.list}>
                <VaccineList/>
            </View>
        </SafeAreaView>
    );
  }

  
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f5df',
    },
    content: {
        paddingTop: '10%',
        flex: 1,
        width: '100%', 
    },
    buttons: {
        paddingTop: '15%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        height: '40%',
        backgroundColor: 'white',
        borderBottomEndRadius: 20,
        borderBottomLeftRadius: 20,
    },
    button: {
        height: '70%',
        width: '40%',
        borderColor: 'black',
        justifyContent: 'center',
        // borderTopWidth: 1,
        // borderBottomWidth: 1,
        backgroundColor: '#f8eeec',
        borderRadius: 13,
        elevation: 10,
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        // fontFamily: 'montserrat-extrabold',
    },
    list: {
        width: '100%',
        // backgroundColor: '#f8eeec',
        flex: 2,
    },
  });
  




