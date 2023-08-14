import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

import images from '../localized/images';

function PicureIcon() {
  return (
    <TouchableOpacity style={styles.conteiner}>
      <Image style={styles.icon} source={images.camera} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 40
  }
})

export default PicureIcon;