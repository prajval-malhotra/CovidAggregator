import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Modal, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default function ResourceItem( { item, pressHandler } ) {

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <View>
            <Modal
                visible={modalOpen}>

                <View style={styles.first}>
                    <View style={styles.second}>
                        <MaterialIcons 
                            name='close'
                            size={24}
                            onPress={() => setModalOpen(false)}
                        />
                        {/* <Text>Item: {item.key}</Text> */}
                        <Text>Name: {item.name}</Text>
                        <Text>Contact: {item.phone}</Text>
                        <Text>Item: {item.item}</Text>
                        <Text>Description: {item.description}</Text>
                        {/* <Text>
                             {item.sessions[0].slots.map(slot => (
                                <Text>{slot + " "}</Text>
                            ))}
                        </Text> */}
                    </View>
                </View>
            </Modal>

            <TouchableOpacity
            onPress={() => setModalOpen(true)}>
                <View style={styles.item}>
                    <Text>Name: {item.name}</Text>
                    <Text>Contact: {item.phone}</Text>
                    <Text>Item: {item.item}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    item: {
      padding: 16,
      marginTop: 16,
      borderRadius: 10,
      backgroundColor: '#f8eeec',
      elevation: 3,
    },
    center: {
        fontSize: 16,
        // fontFamily: 'montserrat-regular',
        color: 'black',
        paddingBottom: 5,
    },
    resource: {
        // fontFamily: 'montserrat-regular',
        fontSize: 16,
        color: '#363636',
    },
    modalView: {
        flex: 1,
        height: '50%',
        margin: 80,
        width: 300,
          height: 300,
    },
    first: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    second: {
        width: '90%',
        height: '42%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: 'white',
        elevation: 20,
        padding: 10,
        borderRadius: 4,
    },
});