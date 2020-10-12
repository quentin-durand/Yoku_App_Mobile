import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import edlRoom from './Components/EDL'
import SelectRefEstate from './Components/SelectEdlEstate'
import edlForm from './Components/EdlForm'
import Cam from './Components/camera'
import Home from './Components/Home'
import snack from './Components/snackbar'



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SelectRefEstate">
      <Stack.Screen 
        name="Home"
        component={Home}
        options={{
          title:'Home',
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
        name="Cam" 
        component={Cam} />
          <Stack.Screen 
        name="snack" 
        component={snack} />
    
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

