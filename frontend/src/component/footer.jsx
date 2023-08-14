import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';

import images from '../localized/images';

const {height} = Dimensions.get('window');

function Footer() {
  return (
    <View style={styles.container}>
      <View style={{ height: '100%', width: 200}} />
      <Image source={images.logo} style={styles.logo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: height * 0.14,

    position: 'relative',
    bottom: 0,
    left: 0,
    right: 0,
  },
  logo: {
    width: 100,
    height: '100%',
  }
})

export default Footer;