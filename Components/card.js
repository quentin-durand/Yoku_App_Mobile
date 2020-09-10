import React, { Component } from 'react'
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import {StyleSheet}from 'react-native'
import { Field, reduxForm } from 'redux-form'
import {View,TextInput,Button,RadioForm} from 'react-native'
import { CheckBox } from 'react-native-elements'
import EdlFormGen from '../Components/EdlForm'

class CardBox extends Component{

  render() {
    return (
      
               
      <EdlFormGen/>
              
           
    );
  }
}
const styles = StyleSheet.create({

  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})
export default CardBox;


