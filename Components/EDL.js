import React, { Component, useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native';
import { render } from 'react-dom';


function edlRoom({ route, navigation }) {
  const { idEstate } = route.params;
  const [id, setId] = useState(idEstate);
  const [rooms, setRooms] = useState({rooms:[]});
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState();
const [edl,setEdl]=useState([{}])

const addEDL = (edl)=>{
  setEdl
}

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
    useEffect(()=>{
      fetchData();
    });
    
    if (error) {
      return <Text>Erreur : {error.message};</Text>
    } else if (!isLoaded) {
      return <Text>Chargement…</Text>;
    } else {

      return (



       rooms.rooms.map((room) =>
          < Text key={room.E_Id}>
           {room.M_EstateValue} 
          </Text>
         

        )

      )
    }

  }
  /*
  class edlRoom extends Component{
  
  constructor(props){
    super(props)
  
  }
  
  async componentDidMount(){
    const param = '1';
    await fetch('http://api.yoku.cda2.lh.manusien-ecolelamanu.fr/api/findRoom/?E_Id='+ param , {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
       
      }
      
    
    })
        .then((response) =>
          response.json()
          )
        .then(
          (data) => {
            this.setState({
              isLoaded: true,
              rooms: data,
             
            });
          })
         .catch(
  (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          })
        
  
        }
   
    
  
      render() {
        const { error, isLoaded, rooms } = this.state;
        console.log(rooms);
        if (error) {
          return <Text>Erreur : {error.message};</Text>
        } else if (!isLoaded) {
          return <Text>Chargement…</Text>;
        } else {
         
          return (
            rooms.rooms.map((room)=>
          < Text key={room.E_Id}>
          {room.M_EstateValue}
      </Text>
           
          ))
        }
      }
    }*/

  

  export default edlRoom