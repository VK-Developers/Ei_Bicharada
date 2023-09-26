import React from 'react';
import { StyleSheet, SafeAreaView, Dimensions, ImageBackground } from 'react-native';
//Components
// import Footer from '../../component/footer';
import Header from '../../component/header';
import ToggleMenu from '../../component/ToggleMenu';
import Background from '../../component/background';

const {height, width} = Dimensions.get('window')

function Divulgacao({route: { params }}) {
  return (
    <>
      <Background img={'five'} />
      <ToggleMenu />
      <SafeAreaView style={styles.container}>
        <Header name={params.name} />
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

export default Divulgacao;