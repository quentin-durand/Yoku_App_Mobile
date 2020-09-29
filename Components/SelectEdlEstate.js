import React, { useState } from 'react'
import { View, TextInput } from 'react-native'
import { Button } from 'react-native-paper';
/*
fonction permettant d'accéder au formulaire d'un bien ;
    - On saisit une référence d'un bien dans un champ text
    - On envoie la donnée vers le composant EDL en cliquant sur le bouton
*/ 
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
            style={{backgroundColor:'#364156',color:'#dff8eb',}}
        >accéder à votre EDL</Button>
    </View>
    );
  }

  export default SelectEdiEstate




