import React, {Component} from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'
import Star from './Star';

library.add(fasFaStar, farFaStar)

class Prueba extends Component {

    updateAge(){
        this.setState({
        });
    }

    render(){
    const {partidos,alertItemName}=this.props;

  /*  console.log(partidos)*/
        return(
         <View>
            {
              partidos && partidos.map((item, index) => (

                  <TouchableOpacity
                     key = {item.id}
                     onPress = {() => alertItemName(item)}>

                     <View style = {styles.container}>
                        <View>
                        <View style = {styles.starCont }>
                           <Text >  {item.estado ? (
                                  <FontAwesomeIcon  style = {styles.star} icon={fasFaStar}  size={22}/>
                             ) : null}</Text>
                            <Text style = {styles.equipos}>

                            {item.local}<Text style={styles.vs}> Vs </Text>{item.visitante}
                            </Text>
                            </View>
                            <Text style = {styles.apuestas}>Dinero apostado: {item.apuestas}</Text>
                        </View>
                     </View>

                  </TouchableOpacity>

               ))
            }
         </View>

        )
    }

}


export default Prueba;

const styles = StyleSheet.create ({
   container: {

      padding: 10,
      marginTop: 13,
      backgroundColor: '#80de5f',
      alignItems: 'flex-start',
      marginHorizontal: 10,
      borderRadius: 10,

   },

   text: {
      color: '#4f603c'
   },
  starCont: {


        paddingHorizontal: 5,
      flexDirection: 'row',



  },
  equipos: {


    fontWeight: 'bold',
      justifyContent: 'flex-start',
    fontSize: 20,
        paddingHorizontal: 5,
  },
  star: {
      color: "yellow",
  },
    vs: {
        color: "red",
    },
  apuestas: {

     flexDirection: 'column',

      marginTop: 5,
        paddingHorizontal: 16,
      fontSize: 15,
  }
})
