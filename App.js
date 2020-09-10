import React, { Component } from 'react';
import { StyleSheet, Text, View,Button
  ,FlatList,Alert } from 'react-native';
import { Provider } from 'react-redux'
import Store from './Reducers/FormReducer'
import Navigation from './Navigation/Navigation'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import edlRoom from './Components/EDL'
import SelectEdiEstate from './Components/SelectEdlEstate'
import findRoom from './Components/navigateTest'
const suck='it\'s sucks'
function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
      title="Go to Details"
      onPress={()=>{navigation.navigate('test',{test:suck})}}/>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="findRoom">
        <Stack.Screen 
        name="SelectEdiEstate"
        component={SelectEdiEstate}
         />
        <Stack.Screen 
        name="Edl" 
        component={edlRoom} />
       <Stack.Screen 
        name="findRoom" 
        component={findRoom} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

