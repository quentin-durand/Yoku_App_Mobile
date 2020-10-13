import React, { useState, useEffect } from 'react'
import { Text, View,Image } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Divider, TextInput, Title, Button, HelperText } from 'react-native-paper'
import styles from '../styles/globalStyles'
import { TextField } from '@material-ui/core';

export default function edlRoom() {


    return(
        <View>
<Text>test</Text>
            <Image style={{backgroundColor:'#FFF'}}
             source={require('../assets/icon.png')}
            />
        </View>
    )
}