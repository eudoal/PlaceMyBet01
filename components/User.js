import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
} from 'react-native';

export default class User extends Component {
  static navigationOptions = {
    title: 'User',
  };

  state = {
    userInfo: {
      nombre: 'Eugenio',
      apellidos: 'Domenech',
      email: 'eugeniodomenech@gmail.com',
    },
  };

  render () {
    const { userInfo: { nombre, apellidos, email } } = this.state;

    return (
      <View style = {styles.container}>

              <Image
              style={{width: 70, height: 70}}
              source={require('./Valencia.png')} />
      <Text>Nombre:</Text>
        <Text style = {styles.texto}>{nombre} {apellidos}</Text>
        <Text>Email:</Text>
        <Text style = {styles.texto}>{email}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   container: {
      alignItems: 'center',
      marginTop: 100,
      padding: 20
   },
     texto: {
        color: 'green',
        fontSize: 20,
        fontWeight: 'bold',
     },
});