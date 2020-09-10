import React, { useState } from 'react'
import { View, TextInput,Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import edlTest from './navigateTest'

function SelectEdiEstate({navigation}) {
    const[idEstate,setIdEstate]=useState(1);
    return (
        <View>
        <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1,margin:10 }}
            name="BIEN_"
            component={'input'}
            type="input"
            onChangeText={(text) => setIdEstate(text)}
            value={idEstate}
        />

        <Button
            title="rechercher un bien"
            onPress={() => navigation.navigate('Edl',{idEstate:idEstate})}
            
        />
    </View>
    );
  }

  export default SelectEdiEstate




