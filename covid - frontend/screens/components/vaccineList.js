import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import VaccineItem from './vaccineItem'

export default function VaccineList() {
  // const [item, setItem] = useState([
  //   { "text": 'buy coffee', "key": '1' },
  //   { "text": 'create an app', "key": '2' },
  //   { "text": 'play on the switch', "key": '3' },
  //   { "text": 'buy coffee', "key": '4' },
  //   { "text": 'create an app', "key": '5' },
  //   { "text": 'play on the switch', "key": '6' },
  //   { "text": 'buy coffee', "key": '7' },
  //   { "text": 'create an app', "key": '8' },
  //   { "text": 'play on the switch', "key": '9' },
  // ]);

  const [ item, setItem ] = useState([])

  const getItems = () => {
    axios.get('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=110007&date=12-09-2021')
      .then(response => {
        setItem(response.data)
        console.log("this ->", response.data);
      })
  }
    

    useEffect(() => {
      getItems();
   }, []);

    // const [data, setData] = useState();

    // fetch('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=700107&date=11-07-2021')
    // .then((response) => response.json())
    // .then((json) => setItem(json))
    // .catch((error) => console.error(error))
    // .finally(() => setLoading(false));


  const presshandler = (key) => {
      // send this data to another screen and display details 
      //   of vaccine center
    //   console.log(data);
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
      <Text style={styles.heading}>Vaccine Centers near you:</Text>
        <ScrollView style={styles.list}>
        {/* <Text>{console.log(item)}</Text> */}
        {console.log("another - ", item)}
          {/* <FlatList
            data={item}
            renderItem={({ item }) => ( 
              <VaccineItem item={ item[["centers"]] } pressHandler={presshandler} />
            )}
          /> */}
          {/* {item.map(t => (
            <FlatList
              data={t}
              renderItem={({ t }) => ( 
                <VaccineItem item={ t } pressHandler={presshandler} />
              )}
            />
          ))} */}
          {
            Object.entries(item).map(t => (
              t[1].map(single => (
                  <VaccineItem item={ single } pressHandler={presshandler} />
              ))
            ))
          }
          {/* {console.log(item)} */}
        </ScrollView>
        <View style={styles.endSpace}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f5df',
  },
  content: {
    padding: 40,
  },
  heading: {
    textAlign: 'left',
    paddingRight: 20,
    fontSize: 25,
    // fontFamily: 'montserrat-extrabold',
  },
  list: {
    marginTop: 20,
    paddingBottom: 10,
  },
  endSpace: {
    position: 'absolute',
    paddingBottom: 10,
  }
});



// {
//   Object.entries(item).map(t => (
//     t[1].map(single => (
//       <ScrollView>
//       {console.log("innnit", single)}
//         <VaccineItem item={ single } pressHandler={presshandler} />
//       </ScrollView>
//     ))
//   ))
// }



{/* <View style={styles.list}>
          {
            Object.entries(vaccinesList).map(vaccines => (
              vaccines[1].map(vaccine => (
                <View>
                  <VaccineItem item={ vaccine } pressHandler={presshandler} />
                </View>
              ))
            ))
          }
        </View> */}