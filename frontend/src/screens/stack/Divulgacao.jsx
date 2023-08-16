import React from 'react';
import { StyleSheet, SafeAreaView, Dimensions, ImageBackground } from 'react-native';
import images from '../../localized/images'
//Components
import Footer from '../../component/footer';
import Header from '../../component/header';
import Return from '../../component/return';

const {height, width} = Dimensions.get('window')

function Divulgacao({navigation, route: { params }}) {
  return (
    <>
      <ImageBackground source={images.backgrounds.tree} resizeMode="cover" style={styles.background} />
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