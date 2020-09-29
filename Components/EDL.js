import React, { useState, useEffect } from 'react'
import { Text, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Divider, TextInput, Title, Button, HelperText } from 'react-native-paper'
import styles from '../styles/globalStyles'
import { TextField } from '@material-ui/core';

export default function edlRoom({ route }) {

  /*on récupère la référence du bien transmis via la route*/
  const { idEstate } = route.params;

  /* on donne une valeur à notre state afin de l'utiliser pour notre fetch*/
  const [id, setId] = useState(idEstate);

  /*on défini un state qui nous permettra  de récupèrer les infos des dfifférentes pièces*/
  const [rooms, setRooms] = useState({ rooms: [] });

  /*on crée un state que l'on défini afin de gérer le statut en erreur des input (infos/errors) */
  const [inputType, setInputType] = useState('info')

  /*constante permettant l'affichage des messages d'erreurs pour chaque input */
  const hasErrors = () => {
    () => setInputType('error');
    return errors
  };
  const [labelName, setLabelName]=useState();

  /*on défini une constante nécessaire au bon fonctionnement de React-Hook-Form */
  const { control, handleSubmit, errors, register } = useForm();
  /*const onSubmit = data=>{data.E_Id=id;
  console.log(data);};*/

  /*cette constante permet l'envoi des données validées vers l'api afin de les enregistrer dans la base de données*/
  const onSubmit = data => {
    data.E_Id = id;
    fetch('http://api.yoku.cda2.lh.manusien-ecolelamanu.fr/api/formCreate', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  /* fonction permettant l'affichage des données de chaque pièce en fonction de la référence du bien transmise depuis la page SelectEdlEstate */
  async function fetchData() {
    const res = await fetch('http://api.yoku.cda2.lh.manusien-ecolelamanu.fr/api/showEdle/?E_Id=' + id, {
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
    .catch(err => {

       setError(err);
     })
  }

  /* utilisation de la fonction fecthData */
  useEffect(() => {
    fetchData();
  }, []);

  return (
    /*affichage de la vue comportant les infos récupérées depuis la BDD */
    <View>

      {rooms.rooms.map((room) => {
        const str = room.M_EstateKey
        const test=str.split('_');
        const labelEND=test[3];

        return (
          <View>
            <Title>{labelEND=='DESC' ?'':test[1]}</Title>
            
            <View>
              <Controller as={TextInput}
                control={control}
                name={str}
                ref={register}
                rules={{ required: true }}
                defaultValue={room.M_EstateValue = null ? "" : room.M_EstateValue}
                type={inputType}
                style={styles.input}
                label={test[3]=='DESC' ? 'Description':'Etat général'}
              />
              <HelperText type="error" visible={hasErrors()}>
                {errors[str] && errors[str].type === "required" && <Text>This is required.</Text>}
              </HelperText>
            </View>
            <Divider />
          </View>

        )
      }
      )
      }
      <View>
        <Button
          title="submit"
          onPress={handleSubmit(onSubmit)}
          style={{ backgroundColor: '#364156', color: '#dff8eb', }}
        >Submit</Button>
      </View>

    </View>
  );
}