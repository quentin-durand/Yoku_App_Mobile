
import React from 'react'
import CardBox from '../Components/card'
import {View,Button} from 'react-native'
class CardTest extends React.Component{
    constructor(){
        super();

        this.state = {
            children: [],
           
        }
    }

    appendChild(){
        this.setState({
            
        children:[ ...this.state.children,<CardBox/>]
            
        });
    }

    render(){
        let board = 'Box';

        return(
            <View> 
                <Button
                title='Create Box'
                onPress={() => this.appendChild()}
                >
                </Button>

              
                <Button
                title='Add Box'
                onPress={() => this.addForm()}
                >
                </Button>
               
                <View >
                {this.state.children.map(child => child)}
                </View>
                </View>
        );
    }
}

export default CardTest;