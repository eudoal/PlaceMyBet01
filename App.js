import React from 'react';
import Lista from './componets/Lista';
import Prueba from './componets/Prueba';
import Footer from './componets/Footer';
import Heading from './componets/Heading';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
    Button,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


export default class App extends React.Component {

        state = {
        favoritos: false,
        partidos: [
            {
              id: '0',
              local: 'Valencia',
              visitante: 'Real Madrid',
              favorito: 'V',
              estado: true,
            },
            {
              id: '1',
              local: 'Levante',
              visitante: 'Leganes',
              favorito: 'V',
              estado: true,
            },
            {
              id: '2',
              local: 'Mayorca',
              visitante: 'Numancia',
              favorito: 'X',
              estado: false,
            },
            {
              id: '3',
              local: 'Elche',
              visitante: 'Atletic',
              favorito: 'X',
              estado: false,
            },
            {
               id: '4',
               local: 'Castellon',
               visitante: 'Murcia',
               favorito: 'X',
               estado: false,
             },
             {
                 id: '5',
                 local: 'Sevilla',
                 visitante: 'Aragones',
                 favorito: 'X',
                 estado: false,
               },
            {
                id: '6',
                local: 'Levante',
                visitante: 'Valencia',
                favorito: 'X',
                estado: false,
              },
           {
               id: '7',
               local: 'Numancia',
               visitante: 'Madrid',
               favorito: 'X',
               estado: false,
             },
             {
                 id: '8',
                 local: 'Valencia',
                 visitante: 'Castellón',
                 favorito: 'X',
                 estado: false,
               },
           {
               id: '9',
               local: 'Atletic',
               visitante: 'Murcia',
               favorito: 'X',
               estado: false,
           }
          ]};

// para utilizar funcion como this
cambiarFavoritos = this.cambiarFavoritos.bind(this);
filtro = this.filtro.bind(this);


cambiarFavoritos(){
const {favoritos}=this.state;

    this.setState({
    favoritos: !favoritos,
    })
};

filtro(){
    const {favoritos,partidos}=this.state;
    return favoritos ? partidos.filter(partido => partido.estado) : partidos;
};


alertItemName = (item) => {
    const {partidos}=this.props;
    if (partidos[item.id].estado){
        partidos[item.id].estado = false;
    }else {
        partidos[item.id].estado = true;
    }
    this.setState({
    /* pasar estado */
    });
};


render(){
const {partidos}=this.state;

  return (
    <>
      <StatusBar barStyle="dark-content" />
          <SafeAreaView style={styles.main}>
              <Heading/>

               <ScrollView
               contentInsetAdjustmentBehavior="automatic"
               style={styles.body}>

               <Prueba style={styles.prueba}
               partidos={this.filtro()}
               alertItemName={this.alertItemName} />

          </ScrollView>
          <Footer cambiarFavoritos={this.cambiarFavoritos}/>

      </SafeAreaView>
    </>
  );
}
}


const styles = StyleSheet.create({
    prueba: {
    height: 'auto',
    },
   main: {
    flex: 1,
    },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

