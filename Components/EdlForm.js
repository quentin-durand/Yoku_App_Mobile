import React from 'react'
import {View,TextInput,Button} from 'react-native'
import globalStyles from '../styles/globalStyles'
import {Formik} from 'formik'


export default function edlForm(){
return(
  <View style={globalStyles.container}>
    <Formik
    initialValues={{estateState:'',description:''}}
    onSubmit={(values)=>{
addEdl
    }
  }
    >
{(props)=>(
  <View style={{flex:1}}>
    <TextInput
    style={globalStyles.input}
    placeholder='edlForm estateState'
    onChangeText={props.handleChange('estateState')}
    value={props.values.estateState}
    />
     
     <TextInput
    style={globalStyles.input}
    placeholder='edlForm description'
    onChangeText={props.handleChange('description')}
    value={props.values.description}
    />
    <Button
    title='submit'
    color='maroon'
    onPress={props.handleSubmit}
    />
  </View>
)}
    </Formik>
  </View>
)
}





/*let EdlFormGen = props => {
  const { handleSubmit } = props
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


EdlFormGen = reduxForm({
  // a unique name for the form
  form: 'edl'
})(EdlFormGen)

export default Form*/
