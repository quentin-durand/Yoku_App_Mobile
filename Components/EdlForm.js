import React from 'react'
import {View,TextInput,Button,RadioForm} from 'react-native'
import {Formik} from 'formik'

/*let EdlFormGen = props => {
  const { handleSubmit } = props*/
  function Form(){

  
return <View >
       <View>
          <label>Type d'état des lieux<br/>Informations générale</label>
       </View>
       <View>
          <label>Etat Générale</label><TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1,margin:10 }}
          name={'BIEN_PIECE_'} component={'input'}  type="input" value=""/> 
       </View>
        <View>
          <label htmlFor="dateCheckIn">Descriptifs de l'état</label>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1,margin:10 }}
          name="dateCheckIn" component={'input'}  type="date" />
        </View>
       

      </View>
}

/*
EdlFormGen = reduxForm({
  // a unique name for the form
  form: 'edl'
})(EdlFormGen)*/

export default Form
