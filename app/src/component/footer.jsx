import React from 'react';
import { StyleSheet, View, Image, Dimensions, Text, TouchableOpacity } from 'react-native';

import images from '../localized/images';

const {height} = Dimensions.get('window');

function Footer({sendIt, obj, exeption}) {

  const handleSubmit = () => {
    console.log(obj)
  };

  return (
    <View style={[styles.container, !!exeption && { alignSelf: 'center' }]}>
      <View style={styles.spLogo}>
        <Image source={images.spLogo} style={styles.logo.sp}/>
        <View style={styles.spText}>
          <Text style={styles.title}>ATESP</Text>
          <Text style={styles.spanText}>Associação dos Técnicos em</Text>
          <Text style={styles.spanText}>Edificações Auxiliares e Afins</Text>
          <Text style={styles.spanText}>do Estado de São Paulo </Text>
        </View>
      </View>
      {
        !exeption && (
          !sendIt ? (
            <Image source={images.logo} style={styles.logo.app}/>
          ) : (
            <TouchableOpacity onPress={handleSubmit}>
              <Image source={images.enviar} style={styles.logo.app}/>
            </TouchableOpacity>
          )
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: height * 0.14,

    position: 'relative',
    bottom: 0,
    left: 0,
    right: 0,
  },
  spLogo: {
    marginLeft: 15,
    height: '80%',
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  logo: {
    app: {
      width: 110,
      height: '100%',
    },
    sp: {
      width: 65,
      height: 75,
    }
  },
  spText: {
    height: '85%',
    flexGrow: 1,
    padding: 5,
    alignItems: 'center'
  },
  title: {
    color: 'black',
    fontWeight: '700'
  },
  spanText: {
    color: 'black',
    fontSize: 10,
    fontWeight: '500'
  }
})

export default Footer;