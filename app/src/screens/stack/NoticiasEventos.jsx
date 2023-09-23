import React from 'react';
import { StyleSheet, SafeAreaView, Dimensions, ImageBackground } from 'react-native';
//Components
import Header from '../../component/header';
import ToggleMenu from '../../component/ToggleMenu';
import Background from '../../component/background';

const {height, width} = Dimensions.get('window')

function NoticiasEventos({navigation, route: { params }}) {

  return (
    <>
      <Background img={'four'} />
      <ToggleMenu />
      <SafeAreaView style={styles.container}>
        <Header name={!!params ? params.name : 'Noticias'}  />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
  background: {
    position: 'absolute',
    height,
    width,
    opacity: 0.08,
    zIndex: -1,
  },
})

export default NoticiasEventos;