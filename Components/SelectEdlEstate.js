import React, { useState } from 'react'
import { View, TextInput } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import edlTest from './navigateTest';
import styles from '../styles/globalStyles';
import { Button } from 'react-native-paper';

function SelectEdiEstate({navigation}) {
    const[idEstate,setIdEstate]=useState();
    return (
        <View>
        <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1,margin:10 }}
            name="BIEN_"
            component={'input'}
            type="input"
            onChangeText={(text) => setIdEstate(text)}
            value={idEstate}
            placeholder='Saississez la référence du bien'
        />

        <Button
            title="accéder à votre EDL"
            onPress={() => navigation.navigate('Edl',{idEstate:idEstate})}
            style={{backgroundColor:'#364156'}}
        >accéder à votre EDL</Button>
    </View>
    );
  }

  export default SelectEdiEstate




