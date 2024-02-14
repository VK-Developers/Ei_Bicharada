import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, Platform } from 'react-native';

import images from '../../localized/images';
import str from '../../localized/strings';

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
    marginTop: Platform.OS === 'ios' ? 25 : 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 18,
    fontWeight: '700'
  },
  arrow: {
    width: 25,
    height: 25,
    marginLeft: 20,
    marginRight: 10
  }
})

export default Return;