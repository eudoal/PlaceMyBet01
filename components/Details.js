import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from 'react-native';

export default class Details extends Component {
  render() {
    const { navigation } = this.props;
    const elemento = navigation.getParam('element')
    return (
      <View style = {styles.container}>

                    <Image
                    source={elemento.escudo} />

        <Text style = {styles.texto}>{elemento.local}{"\n"}</Text>

        <Text>{elemento.Fundado}</Text>
        <Text>{elemento.Entrenador}</Text>
        <Text>{elemento.Presidente}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
   container: {
      alignItems: 'center',
      marginTop: 100,
      padding: 0,
   },
      texto: {
      marginTop: 20,
         color: 'green',
         fontSize: 30,
         fontWeight: 'bold',
      },
});