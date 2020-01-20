import React, {Component} from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,} from 'react-native';

class Footer extends Component {


    render(){
    const {cambiarFavoritos}=this.props;
        return(
        <Button title='Todos / Favoritos' onPress={cambiarFavoritos}
        />
        )
    }
}

export default Footer;

const styles = StyleSheet.create ({
  boton: {
      color: "yellow",
  },

})