import React, { Component } from 'react';
import { StyleSheet, Text, View,Button
  ,FlatList,Alert } from 'react-native';
import Navigation from './Navigation/Navigation'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import edlRoom from './Components/EDL'
import SelectEdiEstate from './Components/SelectEdlEstate'
import findRoom from './Components/navigateTest'
import edlForm from './Components/EdlForm'
import testForm from './Components/Login'
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
      <Stack.Navigator initialRouteName="SelectEdiEstate">
      <Stack.Screen 
        name="SelectEdiEstate"
        component={SelectEdiEstate}
        options={{
          title:'Etat des lieux',
          headerStyle: {
            backgroundColor: '#dff8eb',
          },
          headerTintColor: '#364156',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
         />
        <Stack.Screen 
        name="Form"
        component={edlForm}
         />
        <Stack.Screen 
        name="Edl" 
        component={edlRoom} 
        options={{
          title:'Etat des lieux',
          headerStyle: {
            backgroundColor: '#dff8eb',
          },
          headerTintColor: '#364156',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
       <Stack.Screen 
        name="findRoom" 
        component={findRoom} />
      <Stack.Screen
      name="testForm"
      component={testForm}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

