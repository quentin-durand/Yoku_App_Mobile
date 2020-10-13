import React, { useState } from 'react'
import { View, TextInput, Alert } from 'react-native'
import { Button} from 'react-native-paper';
/*
fonction permettant d'accéder au formulaire d'un bien ;
    - On saisit une référence d'un bien dans un champ text
    - On envoie la donnée vers le composant EDL en cliquant sur le bouton
*/



function SelectRefEstate({ navigation }) {
  const [refEstate, setRefEstate] = useState();
  const EDLE='EDLE'

 
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
<View
style={{FlexDirection : 'center' }}
>
      <Button
      
        title="accéder à votre EDL"
        color={'#dff8eb'}
        onPress={() => navigation.navigate('Edl', { refEstate: refEstate })}
        style={{ backgroundColor: '#364156',FlexDirection : 'center' }}
        selectionColor={'#364156'}
        underlineColor={'#dff8eb'}

      >accéder à votre EDL</Button>
     </View>
     
    </View>
  );
}

export default SelectRefEstate




