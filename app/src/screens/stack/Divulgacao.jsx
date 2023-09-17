import React from 'react';
import { StyleSheet, SafeAreaView, Dimensions, ImageBackground } from 'react-native';
//Components
// import Footer from '../../component/footer';
import Header from '../../component/header';
import Return from '../../component/return';
import Background from '../../component/background';

const {height, width} = Dimensions.get('window')

function Divulgacao({navigation, route: { params }}) {
  return (
    <>
      <Background img={'five'} />
      <SafeAreaView style={styles.container}>
        <Return nav={navigation} />
        <Header name={params.name} />
        {/* <Footer /> */}
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