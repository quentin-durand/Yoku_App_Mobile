import React,{useState,Component} from 'react'
import { View,Text,Button } from 'react-native'
import Form from '../Components/EdlForm'
/*function usersTest({route,navigation}){
 
  const[isLoaded,setIsLoaded]=useState(false);
  const[error,setError]=useState('');
  const[users,setUsers]=useState('');

   fetch('http://api.yoku.cda2.lh.manusien-ecolelamanu.fr/api/users/', {
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
          setIsLoaded(true);
          this.setState(
            setUsers(data)
          )
          })
         .catch(
  (error) => {
    setIsLoaded(true);
    setError(error);
          });



      if (error) {
        return <Text>Erreur : {error.message};</Text>
      } else if (!isLoaded) {
        return <Text>Chargement…</Text>;
      } else {
      return(
      
           users.users.map((user)=>
          < Text key={user.U_Id}>
          {user.U_Email}
      </Text>
           
          
      ));
    
  }   
      

}*/

class findRoom extends Component{

constructor(prosp){
  super(prosp);
  this.state={
    isLoaded:false,
    users:[]
  }
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
          <View>
        < Text key={room.E_Id}>
      <Form/>
      
    </Text>
       <Button type="submit" title="Envoyer"/>  
       </View>
        ))
      }
    }
  }
  export default findRoom 