import React, { useState, useEffect } from 'react'
import { Text, View,Button } from "react-native";
import { useForm, Controller } from "react-hook-form";
import {Divider, TextInput,Title} from 'react-native-paper'
import styles from '../styles/globalStyles'

export default function edlRoom({ route }) {
  const { idEstate } = route.params;
 // const [error, setError] = useState();
  const [rooms, setRooms] = useState({ rooms: [] });
  const [id, setId] = useState(idEstate);
  const {control,handleSubmit,errors,register} = useForm();
  const onSubmit = data => fetch('http://api.yoku.cda2.lh.manusien-ecolelamanu.fr/api/formCreate/store/'+data);
console.log('errors',errors);

  async function fetchData() {
    const res = await fetch('http://api.yoku.cda2.lh.manusien-ecolelamanu.fr/api/findRoom/?E_Id=' + id, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
    res
      .json()
      .then(res => {

        setRooms(res);
      })
     /* .catch(err => {

        setError(err);
      })*/
  }
  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <View>

      {rooms.rooms.map((room) => {
      const str=room.M_EstateKey
const keyRoom=str.substring(11);
        const nameGen='EDLE_' + keyRoom + '_ETAT_GENERAL';
        const nameDesc='EDLE_' + keyRoom + '_ETAT_DESC';
        return (
          
          <View>
          <Title>{room.M_EstateValue}</Title>
          <Controller
        control={control}
        name={nameGen}
        ref={register}
        rules={{ required: true }}
        defaultValue=""
        render={({ onChange, onBlur, value }) => (
          <TextInput
          label='Etat Général'
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            
          />
        )}
      />
    
      {errors[nameGen] && <Text>This is required.</Text>}
      
      <Controller
        control={control}
        
        render={({ onChange, onBlur, value }) => (
          <TextInput
          label='Description'
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            
            
          />
        )}
        ref={register({ required: 'this is required', maxLength: 20 })}
        name={nameDesc}
        defaultValue=""
      />{errors[nameGen] && <Text>This is required.</Text>}
     <Divider/>
          </View>
          
        )
      }
      )
      }
      <View>
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
      
    </View>
  );
}