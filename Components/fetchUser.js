import React, { Component } from 'react'
import { View,Text,FlatList } from 'react-native';


class Users extends Component{
constructor(props){
  super(props);
  this.state={
    error : null,
    users : [],
    isLoaded: false,
    
  }
 
}

async componentDidMount(){
      
  await fetch('http://api.yoku.cda2.lh.manusien-ecolelamanu.fr/api/users', {
    method: 'GET',
   // append:('E_Id',1),
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
            users: data,
           
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
      const { error, isLoaded, users } = this.state;
      
      if (error) {
        return <Text>Erreur : {error.message};</Text>
      } else if (!isLoaded) {
        return <Text>Chargement…</Text>;
      } else {
       
        return (
        users.users.map((user)=>
        < Text key={user.U_Id}>
        {user.U_Email}
    </Text>
         
        ))
      }
    }
  }

  export default Users