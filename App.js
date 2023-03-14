import React, { Component} from 'react';
import { 
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';

export default class form extends Component {
  constructor(){
    super()

    this.state = {
      user:'',
      password:'',
      message:''
    }
    this.user = {
      user: 'julian',
      password: '1234'
    }
  }
  onChangeUser(user){
    this.setState({user})
  }
  onChangePassword(password){
    this.setState({password})
  }
  buttonPressed() {  
    if(this.state.user == this.user.user  && this.state.password == this.user.password ) {
      var message = 'Logueado'
      this.setState({message})
    } 
    else 
    {
      var message = 'Error!!'
      this.setState({message})
    }
  }  

  render() {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Formulario ReactNative</Text>
          <View>
            <Text style={styles.title}>Usuario</Text>
            <TextInput 
              style={styles.input}
              placeholder='User'
              value={this.state.user}
              onChangeText={(user) => this.onChangeUser(user)}
            />
            <Text style={styles.title}>Contraseña</Text>
            <TextInput 
              style={styles.input}
              placeholder='Password'
              value={this.state.password}
              onChangeText={(password) => this.onChangePassword(password)}
            />
            <TouchableHighlight 
            style={styles.button}
            onPress={() => this.buttonPressed()}
            >
              <Text style={styles.textButton}>Login</Text>
            </TouchableHighlight>
            <Text style={styles.title}>{this.state.message}</Text>
          </View>
        </View>
      );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fcff',
    marginTop: 30,
    paddingLeft: 15,
    paddingRight: 15
  },
  input: {
    height: 35,
    borderColor: '#ccc',
    borderWidth: 2,
    marginBottom: 20,
    borderRadius: 7,
    padding: 6
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize:22
  },
  button: {
    backgroundColor: 'skyblue',
    padding: 5,
    borderRadius: 10,
    width: '50%'
  },
  textButton: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
  
});

AppRegistry.registerComponent('form', () => form);