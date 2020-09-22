import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
//import { Button, Divider } from 'react-native-paper'

export default function test({route}) {
  const { idEstate } = route.params;
  const [error, setError] = useState();
  const [rooms, setRooms] = useState({ rooms: [] });
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);


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
        setIsLoaded(true);
        setRooms(res);
      })
      .catch(err => {
        setIsLoaded(true);
        setError(err);
      })
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View>
      {rooms.rooms.map((room) => {
        
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name={'EDLE_' + room.M_EstateValue + '_GEN'}
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.firstName && <Text>This is required.</Text>}

      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name={'EDLE_' + room.M_EstateValue + '_DESC'}
        defaultValue=""
      />
        }
        )
        }
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}