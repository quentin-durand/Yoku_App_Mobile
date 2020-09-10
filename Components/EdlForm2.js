import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {View,TextInput,Button,RadioForm} from 'react-native'
//const(['BIEN_EDL_1_PIECE_CHAMBRE_1','x';])
let EdlFormPerso = props => {
  const { handleSubmit } = props
  return <form onSubmit={handleSubmit}>

      <View>
      <label htmlFor="numéro du bien">Bien</label>
        <Field name="BIEN" component="input" type="text" />
      </View>
      <View>
        <label htmlFor="room">{typedepiece}</label>
        <Field name="BIEN_PIECE" component="input" type="text" />
      </View>
      <View>
      <label htmlFor="room">Etat générale de la pièce</label>
        <Field name="ETAT_GEN" component="input" type="text" />
      </View>
        <View>
        <label htmlFor="firstName">Description</label>
        <Field name="ETAT_DESC" component="input" type="text" />
        </View>
        <View>
        <label htmlFor="ETAT_PHOTO">Photos</label>
        <Field name="ETAT_PHOTO" component="input" type="text" />
        </View>
       
      <button type="submit">Suivant</button>
      </form>

      
}

EdlFormPerso = reduxForm({
  // a unique name for the form
  form: 'edl'
})(EdlFormPerso)

export default EdlFormPerso
