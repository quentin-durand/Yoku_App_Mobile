import React from "react";
import { Text, View, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import styles from '../styles/globalStyles'
import { ContactSupportOutlined } from "@material-ui/icons";

export default function testForm() {
  const { control, handleSubmit, errors,register } = useForm();
  const onSubmit = data => console.log(data);
console.log('errors',errors)
  return (
    <View>
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
        rules={{ required: true }}
        name="firstName"
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
        name="lastName"
        defaultValue=""
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}