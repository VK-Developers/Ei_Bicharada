import React from 'react';
import {  StyleSheet, SafeAreaView, Dimensions, ImageBackground, View } from 'react-native';
import images from '../../localized/images'
//Components
import Footer from '../../component/footer';
import Header from '../../component/header';
import Return from '../../component/return';
import TextInput from '../../component/resgate/TextInput';

const {height, width} = Dimensions.get('window')

function Resgate({navigation, route: { params }}) {
  return (
    <>
      <ImageBackground source={images.backgrounds.tree} resizeMode="cover" style={styles.background} />
      <SafeAreaView style={styles.container}>
        <Return nav={navigation} />
        <Header name={params.name} />
        <View style={styles.content}>
          <TextInput title={'Animal'} />
        </View>
        <Footer />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
  content: {
    backgroundColor: 'red',
    height: height - (height * 0.14) - 150,
  },
  background: {
    position: 'absolute',
    height,
    width,
    opacity: 0.08,
    zIndex: -1,
  },
})

export default Resgate;