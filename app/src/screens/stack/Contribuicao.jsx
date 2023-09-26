import React from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
//Components
import Footer from '../../component/footer';
import Header from '../../component/header';
import ToggleMenu from '../../component/ToggleMenu';
import Background from '../../component/background'

import str from '../../localized/strings'

function Contribuicao({route: { params }}) {
  return (
    <>
      <Background img={'tree'} />
      <ToggleMenu />
      <SafeAreaView style={styles.container}>
        <View style={{flexGrow: 1}}>
          <View>
            <Header name={params.name} />
          </View>
          <View style={{flexGrow: 1}}>
            <View style={styles.infoContainer}>
              <Text style={styles.text}>{str.retirada[0]}</Text>
              <Text style={styles.text}>{str.retirada[1]}</Text>
            </View>

            <View style={styles.bar} />

            <View style={styles.infoContainer}>
              <Text style={styles.text}>{str.coleta[0]}</Text>
              <Text style={styles.text}>{str.coleta[1]}</Text>
            </View>

            <View style={styles.bar} />

            <View style={styles.infoContainer}>
              <Text style={styles.text}>{str.doacao[0]}</Text>
              <Text style={styles.text}>{str.doacao[1]}</Text>
            </View>
          </View>
        </View>
        <Footer />
      </SafeAreaView>
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
  }
})

export default Contribuicao;