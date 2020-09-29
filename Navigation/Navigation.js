import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import EdlForm from '../Components/EdlForm'
import EdlFormPerso from '../Components/EdlForm2'


import Edl from '../Components/EDL'

import searchEstate from '../Components/SelectEdlEstate'


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="EdlForm"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >

 
      <Tab.Screen
        name="EdlForm"
        component={EdlForm}
        options={{
          tabBarLabel: 'EdlForm',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
       <Tab.Screen
        name="EdlFormPerso"
        component={EdlFormPerso}
        options={{
          tabBarLabel: 'EdlForm2',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
          <Tab.Screen
        name="Edl"
        component={Edl}
        options={{
          tabBarLabel: 'Edl',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    
       <Tab.Screen
        name="searchEstate"
        component={ searchEstate}
        options={{
          tabBarLabel: 'searchEstate',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
       
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}