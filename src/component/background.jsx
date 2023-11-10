import React from 'react';
import { StyleSheet, ImageBackground, Dimensions } from 'react-native';

import images from '../localized/images';

const {height, width} = Dimensions.get('window')

function Background({img, cover}) {
      const { backgrounds } = images
      return (
            <ImageBackground
                  source={backgrounds[img]}
                  resizeMode="cover"
                  style={[
                        styles.container,
                        {
                              zIndex: !!cover ? 1 : -1,
                              opacity: !!cover ? 1 : 0.1
                        }
                  ]}
            />
      );
}

const styles = StyleSheet.create({
      container: {
            backgroundColor: 'white',
            position: 'absolute',
            height,
            width,
      }
})

export default Background;