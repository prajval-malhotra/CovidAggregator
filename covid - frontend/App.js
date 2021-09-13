import React, { useState } from 'react';
import { StyleSheet,  Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

// import Pincode from './screens/pincode'
// import Home from './screens/Home'
import Donate from './screens/components/Donate';
import * as Font from 'expo-font';  
import AppLoading from 'expo-app-loading';
import Navigator from './routes/homeStack';
import ResourceList from './screens/components/resourcesList'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import VaccineList from './screens/components/vaccineList'



// const getFonts = () => Font.loadAsync({
//     'montserrat-thin': require('./assets/fonts/Montserrat-Thin.ttf'),
//     'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
//     'montserrat-extrabold': require('./assets/fonts/Montserrat-ExtraBold.ttf'),
//   });

  // const _handleLoadingError = error => {
  //   // In this case, you might want to report the error to your error
  //   // reporting service, for example Sentry
  //    console.warn(error);
  // };




// export default function Home({ navigation }) {


//     // const onPressHandler2 = () => {
//     //   this.props.navigation.navigate('give_resources')
//     // }

//     return (
//           <SafeAreaView style={styles.container}>
//               <View style={styles.buttons}>
//                       <TouchableOpacity style={styles.button}
//                         onPress={() => navigation.navigate('ResourceList')}
//                       >
//                           <Text style={styles.buttonText}>Find Resources</Text>
//                       </TouchableOpacity>

//                       <TouchableOpacity style={styles.button}
//                         // onPress={onPressHandler2}
//                       >
//                           <Text style={styles.buttonText}>Give Resources</Text>
//                       </TouchableOpacity>
//               </View>

//               <View style={styles.list}>
//                   <VaccineList/>
//               </View>
//           </SafeAreaView>
//     );
//   }

  
  
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
  

  const Stack = createStackNavigator()  

  
  export default function App() {

  // const [fontsLoaded, setFontsLoaded] = useState(true);

  // if(fontsLoaded) {
    return(
      // <NavigationContainer>
      //   <Stack.Navigator initialRouteName="ResourceList">
      //     <Stack.Screen name="Home" component={Home} />
      //     <Stack.Screen name="ResourceList" component={ResourceList} />
      //     <Stack.Screen name="Donate" component={Donate} />
      //     {/* <Stack.Screen name="Settings" component={Settings} /> */}
      // </Stack.Navigator>
      // </NavigationContainer>
      <ResourceList />
    );
  // }

  
  
  // else {
  //   return(s
  //     <AppLoading 
  //       startAsync={getFonts}
  //       onError={_handleLoadingError}
  //       onFinish={() => setFontsLoaded(true)}
  //     />
  //   )
  // }

}

