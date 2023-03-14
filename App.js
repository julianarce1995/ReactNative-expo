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
      message:'',
      carroColor: '',
      proceso: '',
      fechaIng: '',
      costo: ''
    }
    this.user1 = {
      userName: 'julian', 
      password:'123'
    }
    this.user2 = {
      userName: 'camilo',
      password:'321'
    }
  }
  onChangeUser(user){
    this.setState({user})
  }
  onChangePassword(password){
    this.setState({password})
  }
  buttonPressed() {  
    if(this.state.user == this.user1.userName && this.state.password == this.user1.password ) {
      let carroColor = 'Azul';
      let proceso = 'Mantenimiento';
      let fechaIng = '12feb2023';
      let costo = '10000';
      this.setState({carroColor})
      this.setState({proceso})
      this.setState({fechaIng})
      this.setState({costo})
    } 
    else if (this.state.user == this.user2.userName && this.state.password == this.user2.password) {
      let carroColor = 'Rojo';
      let proceso = 'Cambio Aceite';
      let fechaIng= '10feb2023'; 
      let costo= '5000';
      this.setState({carroColor})
      this.setState({proceso})
      this.setState({fechaIng})
      this.setState({costo})
    }
    else
    {
      let message = 'Error!!'
      this.setState({message})
      setTimeout(
        function() {
          let message = ''
          this.setState({message})
            this.setState({timePassed: true});
        }
        .bind(this),
        3000
      );
    }
  }  

  render() {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Mi Taller</Text>
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
            <Text style={styles.title}>carro color: {this.state.carroColor}</Text>
            <Text style={styles.title}>proceso: {this.state.proceso}</Text>
            <Text style={styles.title}>fecha ingreso: {this.state.fechaIng}</Text>
            <Text style={styles.title}>costo: {this.state.costo}</Text>
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
    margin: 15,
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