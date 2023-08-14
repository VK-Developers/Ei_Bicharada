import React from 'react';
import { StyleSheet, ImageBackground, Dimensions } from 'react-native';

import images from '../localized/images';

const {height, width} = Dimensions.get('window')

function Background({img}) {
      const { backgrounds } = images
      return (
            <ImageBackground 
                  source={backgrounds[img]}
                  resizeMode="cover" 
                  style={styles.container}
            />
      );
}

const styles = StyleSheet.create({
      container: {
            position: 'absolute',
            height,
            width,
            opacity: 0.08,
            zIndex: -1,
      }
})

export default Background;