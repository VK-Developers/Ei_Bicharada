import React from 'react';
import { StyleSheet, View } from 'react-native';
import images from '../../localized/images'
//Components
import Footer from '../../component/Footer';
import Header from '../../component/Header';
import Background from '../../component/Background';
import ToggleMenu from '../../component/ToggleMenu';

function PrestacaoDeContas({route: { params }}) {
  return (
    <>
    <Background img={'tree'} />
    <ToggleMenu />
      <View style={styles.container}>
        <View style={{flexGrow:1}}>
          <Header name={params.name} />
          <View style={{flexGrow: 1}}>

            


          </View>
        </View>
        <Footer />
      </View>
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
    marginTop: 70,
    marginBottom: 40
  },
  text: {
    color: 'black',
    fontWeight: '800',
    fontSize: 26,
    textAlign: 'center',
  },
  iconContainer: {

    alignSelf: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 20,
    icon: {
      width: 160,
      height: 150,
    }
  }
})

export default PrestacaoDeContas;