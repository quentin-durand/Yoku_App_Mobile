import React from 'react'
import { reduxForm, Field } from "redux-form";
import {View,TextInput,Button} from 'react-native'



class LoginForm extends React.Component {
	render() {
		return (
		<View  style={{flex:1,flexDirection:"col"}}>
			<View >
				<label>Login</label>
				<Field
                style={{borderColor:'black',borderStyle:'solid',borderWidth:1,flex:1,flexDirection:'row'}}
					name="login"
					label="Identifiant"
					textContentType="username"
					autoCorrect={false}
					autoCapitalize="none"
					component={TextInput}
					icon="person"
				/>
                </View>
                <View>
				<label>Password</label>
				<Field
                 style={{borderColor:'black',borderStyle:'solid',borderWidth:1}}
					name="password"
					label="Mot de passe"
					textContentType="password"
					secureTextEntry={true}
					autoCorrect={false}
					autoCapitalize="none"
					component={TextInput}
					icon="key"
				/></View>
				<View>
				<Button title="Connexion" full warning rounded onPress={this.props.handleSubmit}>
				</Button>
				</View>
        </View>
	
		);
	}
}

export default reduxForm({
	form: "login",
})(LoginForm);