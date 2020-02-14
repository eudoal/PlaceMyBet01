import React from 'react';
import Lista from './Lista';
import Prueba from './Prueba';
import Footer from './Footer';
import Heading from './Heading';

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
              Fundado: 'Fundado el 18 de marzo de 1919',
              Entrenador: 'Entrenador: Albert Celades',
              Presidente: 'Presidente: Anil Murthy',
              escudo: require('../imagenes/Valencia.png'),
            },
            {
              id: '1',
              local: 'Levante',
              visitante: 'Leganes',
              favorito: 'V',
              estado: true,
              Fundado: 'Fundado en 1909',
              Entrenador: 'Entrenador: Paco López',
              Presidente: 'Presidente: Francisco Catalán',
              escudo: require('../imagenes/Levante.png'),
            },
            {
              id: '2',
              local: 'Mallorca',
              visitante: 'Numancia',
              favorito: 'X',
              estado: false,
              Fundado: 'Fundado en 1916',
              Entrenador: 'Entrenador: Vicente Moreno Peris',
              Presidente: 'Director ejecutivo: Maheta Molango',
              escudo: require('../imagenes/Mallorca.png'),
            },
            {
              id: '3',
              local: 'Elche',
              visitante: 'Athletic',
              favorito: 'X',
              estado: false,
              Fundado: 'Fundado el 28 de agosto de 1922',
              Entrenador: 'Entrenador: José Rojo Martín',
              Presidente: 'Presidente: Joaquín Buitrago Marhuenda',
              escudo: require('../imagenes/Elche.png'),
            },
            {
               id: '4',
               local: 'Castellon',
               visitante: 'Murcia',
               favorito: 'X',
               estado: false,
              Fundado: 'Fundado el 20 de julio de 1922',
              Entrenador: 'Entrenador: Óscar Cano Moreno',
              Presidente: 'Administrador: Óscar Cano Moreno',
              escudo: require('../imagenes/Castellon.png'),
             },
             {
                 id: '5',
                 local: 'Sevilla',
                 visitante: 'Aragones',
                 favorito: 'X',
                 estado: false,
              Fundado: 'Fundado el 25 de enero de 1890',
              Entrenador: 'Entrenador: Julen Lopetegui',
              Presidente: 'Presidente: José Castro Carmona',
              escudo: require('../imagenes/Sevilla.png'),
               },
            {
                id: '6',
                local: 'Levante',
                visitante: 'Valencia',
                favorito: 'X',
                estado: false,
              Fundado: 'Fundado en 1909',
              Entrenador: 'Entrenador: Paco López',
              Presidente: 'Presidente: Francisco Catalán',
              escudo: require('../imagenes/Levante.png'),
              },
           {
               id: '7',
               local: 'Numancia',
               visitante: 'Madrid',
               favorito: 'X',
               estado: false,
              Fundado: 'Fundado el 9 de abril de 1945',
              Entrenador: 'Entrenador: Aritz López Garai',
              Presidente: 'Presidente: Moisés Israel Garzón',
              escudo: require('../imagenes/Numancia.png'),
             },
             {
                 id: '8',
                 local: 'Valencia',
                 visitante: 'Castellón',
                 favorito: 'X',
                 estado: false,
              Fundado: 'Fundado el 18 de marzo de 1919',
              Entrenador: 'Entrenador: Albert Celades',
              Presidente: 'Presidente: Anil Murthy',
              escudo: require('../imagenes/Valencia.png'),
               },
           {
               id: '9',
               local: 'Athletic',
               visitante: 'Murcia',
               favorito: 'X',
               estado: false,
              Fundado: 'Fundado en 1898',
              Entrenador: 'Entrenador: Gaizka Garitano',
              Presidente: 'Presidente: Aitor Elizegi',
              escudo: require('../imagenes/athletic.png'),
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
    const {partidos}= this.state;
    const validar = [...partidos];
    const estado = !item.estado;
    validar.map(item2 => (item2.id === item.id) && (item2.estado = estado));

//    if (partidos[+item].estado){
//        partidos[+item].estado = false;
//    }else {
//        partidos[+item].estado = true;
//    }
    this.setState({
    partidos: validar
    /* pasar estado */
    });
};

viewDetails = (id) => {
    const {navigate} = this.props.navigation;
    const [element] = this.state.partidos.filter(el => el.id === id);
    navigate('Details', { element })
  }

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
               alertItemName={this.alertItemName}
               viewDetails={this.viewDetails}/>

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