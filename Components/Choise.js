import React, { useState } from 'react'
import { View, TextInput, Alert } from 'react-native'
import { Button} from 'react-native-paper';
/*
fonction permettant d'accéder au formulaire d'un bien ;
    - On saisit une référence d'un bien dans un champ text
    - On envoie la donnée vers le composant EDL en cliquant sur le bouton
*/


)
function SelectRefEstate({ navigation }) {
  const [refEstate, setRefEstate] = useState();
  const EDLE='EDLE'

 
  return (
    <View>

      <Button
        title="accéder à votre EDL"
        color={'#dff8eb'}
        onPress={() => navigation.navigate('Edl', { refEstate: refEstate })}
        style={{ backgroundColor: '#364156' }}

      >accéder à votre EDL</Button>
        <Button
        title="accéder à votre EDL"
        color={'#dff8eb'}
        onPress={() => navigation.navigate('Edl', { refEstate: refEstate })}
        style={{ backgroundColor: '#364156' }}

      >accéder à votre EDL</Button>
     
    </View>
  );
}

export default SelectRefEstate