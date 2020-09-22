import React from 'react'
import { View, TextInput, Button } from 'react-native'
import globalStyles from '../styles/globalStyles'
import { Formik } from 'formik'


export default function EdlForm() {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ estateState: '', description: '' }}
        onSubmit={(values) => {
          addEdl();
        }
        }
      >
        {(props) => (
          <View style={{ flex: 1 }}>
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
          </View>
        )}
      </Formik>
    </View>
  )
}
/*
<Button
title='submit'
color='maroon'
onPress={props.handleSubmit}
/>*/