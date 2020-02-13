import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from 'react-native';

export default class Details extends Component {
  render() {
    const { navigation } = this.props;
    const elemento = navigation.getParam('element')

    return (
      <View>
        <Text>{elemento.local}</Text>
        <Text>{elemento.Fundado}</Text>
        <Text>{elemento.Entrenador}</Text>
        <Text>{elemento.Presidente}</Text>
      </View>
    )
  }
}