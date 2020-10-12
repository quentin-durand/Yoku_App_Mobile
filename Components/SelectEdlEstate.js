import React, { useState } from 'react'
import { View, TextInput, Alert } from 'react-native'
import { Button} from 'react-native-paper';
/*
fonction permettant d'accéder au formulaire d'un bien ;
    - On saisit une référence d'un bien dans un champ text
    - On envoie la donnée vers le composant EDL en cliquant sur le bouton
*/

Alert.alert(
  'Alert Title',
  'My Alert Msg',
  [
    { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
    { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
    { text: 'OK', onPress: () => console.log('OK Pressed') },
  ],
  { cancelable: false }
)
function SelectRefEstate({ navigation }) {
  const [refEstate, setRefEstate] = useState();

 
  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10 }}
        name="BIEN_"
        component={'input'}
        type="input"
        onChangeText={(text) => setRefEstate(text)}
        value={refEstate}
        placeholder='Saississez la référence du bien'
      />

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




