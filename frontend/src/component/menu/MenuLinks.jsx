import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Image, Dimensions } from 'react-native';

import images from '../../localized/images';

const {width, height} = Dimensions.get('window');

function MenuLinks({name}) {
  return (
    <TouchableOpacity style={styles.link}>
      <Image source={images.backgrounds.one} style={styles.logo}/>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    height: width * 0.12,
  },
  text: {
    color: 'red',
    fontSize: 24,
    // fontWeight: 300 erro estranho 
  },
  logo: {
    width: 35,
    height: 35,
    marginLeft: width * 0.1,
    marginRight: 15
  }
})

export default MenuLinks;