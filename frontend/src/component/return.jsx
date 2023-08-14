import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import images from '../localized/images';
import str from '../localized/strings';

function Return({nav}) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => nav.goBack()}>
      <Image source={images.arrow} style={styles.arrow}/>
      <Text style={styles.text}>{str.return}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600'
  },
  arrow: {
    width: 25,
    height: 25,
    marginLeft: 20,
    marginRight: 10
  }
})

export default Return;