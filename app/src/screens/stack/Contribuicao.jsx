import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';

const { height } = Dimensions.get('screen');
//Components
import Footer from '../../component/Footer';
import Header from '../../component/Header';
import ToggleMenu from '../../component/ToggleMenu';
import Background from '../../component/Background';

import images from '../../localized/images';

function Contribuicao({route: { params }}) {
  return (
    <>
    <Background img={'tree'} />
    <ToggleMenu />
      <View style={styles.container}>
        <View style={{ flexGrow: 1 }}>
          <Header name={params.name} />
        </View>
        <Footer />
      </View>
      <Image source={images.piggy} style={styles.piggy}/>
      <Text style={styles.money}>R$ 100,00</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    height: '97%',
    justifyContent: 'space-between'
  },
  infoContainer: {
    padding: 40,
  },
  text: {
    color: 'black',
    fontWeight: '800',
    fontSize: 28,
    textAlign: 'center',
  },
  bar: {
    width: 130,
    height: 5,
    alignSelf: 'center',
    backgroundColor: 'black',
    borderRadius: 20,
  },
  piggy: {
    width: 300,
    height: 300,
    position: 'absolute',
    zIndex: 0,
    top: height * 0.20,
    alignSelf: 'center'
  },
  money: {
    color: 'black',
    position: 'absolute',
    zIndex: 1,
    top: height * 0.4,
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: '800'
  }
})

export default Contribuicao;