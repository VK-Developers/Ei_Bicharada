import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import images from '../../localized/images'
//Components
import Footer from '../../component/footer';
import Header from '../../component/header';
import Background from '../../component/background';
import ToggleMenu from '../../component/ToggleMenu';

function PrestacaoDeContas({navigation, route: { params }}) {
  return (
    <>
    <Background img={'tree'} />
    <ToggleMenu />
      <View style={styles.container}>
        <View>
          <Header name={params.name} />
          <View style={{flexGrow: 1}}>
            <View style={styles.infoContainer}>
              <Text style={styles.text}>Acompanhe e Saiba</Text>
              <Text style={styles.text}>Quanto Custa</Text>
            </View>
            <TouchableOpacity style={styles.iconContainer}>
              <Image source={images.donate} style={styles.iconContainer.icon} />
            </TouchableOpacity>
            <View style={styles.infoContainer}>
              <Text style={styles.text}>Cada Doação</Text>
            </View>
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