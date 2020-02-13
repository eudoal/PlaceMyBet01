import React, {Component} from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons';

library.add(fasFaStar, farFaStar)

class Star extends Component {
    render(){
        return(
        <FontAwesomeIcon  style = {styles.star} icon={fasFaStar}  size={20}/>
        )
    }
}

export default Star;

const styles = StyleSheet.create ({
  star: {
      color: "yellow",
  },

})