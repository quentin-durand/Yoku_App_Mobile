import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import edlRoom from './Components/EDL'
import SelectRefEstate from './Components/SelecteRefEstateEdle'
import Cam from './Components/camera'

import edls from './Components/EDLS'



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SelectRefEstate">

      <Stack.Screen 
        name="SelectRefEstate"
        component={SelectRefEstate}
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
        name="edls" 
        component={edls} 
        options={{
          title:'Etat des lieux de sortie',
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
        name="Cam" 
        component={Cam} />
         
    
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

