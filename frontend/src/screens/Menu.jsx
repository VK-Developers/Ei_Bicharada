import React from 'react';
import {  StyleSheet, SafeAreaView, View, Dimensions, ImageBackground } from 'react-native';
import images from '../localized/images'
import { menuTopics as topics } from '../localized/structures';
//Components
import MenuLinks from '../component/menu/MenuLinks';
import Footer from '../component/footer';

const {height, width} = Dimensions.get('window')

function Menu() {
  return (
    <>
      <ImageBackground source={images.backgrounds.two} resizeMode="cover" style={styles.background} />
      <SafeAreaView style={styles.homeContainer}>
        { topics.map(topic => <MenuLinks key={topic + '-menu'} name={topic} />) }
          <Footer />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'space-between'
  },
  background: {
    position: 'absolute',
    height,
    width,
    opacity: 0.08,
    zIndex: -1,
  },
  textLinks: {
    marginTop: 20,
    marginBottom: 10,
    flexGrow: 1,
    justifyContent: 'space-around'
  },
})

export default Menu;