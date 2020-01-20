import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'

library.add(fasFaStar, farFaStar)


const DATA = [
  {
    id: '0',
    local: 'Valencia',
    visitante: 'Real Madrid',
    favorito: 'v',
    apuestas: '2000',
  },
  {
    id: '1',
    local: 'Levante',
    visitante: 'Leganes',
    favorito: 'v',
    apuestas: '250',
  },
  {
    id: '2',
    local: 'Mayorca',
    visitante: 'Numancia',
    favorito: 'x',
    apuestas: '300',
  },
];

function cambiar(){
            this.setState({
            favorito: 'X'
            })
}

function Item({ visitante, local ,favorito, apuestas}) {
  return (

    <View style={styles.containers}>
        <View >
            <Text style={styles.equipos}>
            {local} <Text style={styles.vs}>Vs</Text> {visitante}
            </Text>
            <Text style={styles.apuestas}>
            Dinero apostado: {apuestas}
            </Text>
        </View>
        <View style={styles.starCont}>
            <Text >
            <FontAwesomeIcon style={styles.star} icon={fasFaStar}  size={20}/>Fav: {favorito}
            </Text>
        </View>
    </View>
  );
}


export default function Lista() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item
        local={item.local}
        visitante={item.visitante}
        favorito={item.favorito}
        apuestas={item.apuestas}
        />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  containers: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#80de5f',
      padding: 10,
      marginVertical: 8,
      marginHorizontal: 10,
      borderRadius: 10,
  },
  starCont: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
  },
  equipos: {
      flex: 1,
      flexDirection: 'row',
    fontWeight: 'bold',
      justifyContent: 'flex-start',
      fontSize: 20
  },
  star: {
      color: "yellow",
  },
    vs: {
        color: "red",
    },
  apuestas: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      fontSize: 15,
  }
});