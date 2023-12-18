import React from 'react';
import { StyleSheet, ImageBackground, Dimensions } from 'react-native';

import images from '../localized/images';

const {height, width} = Dimensions.get('window')

function Background({img, cover, tint}) {
      const { backgrounds } = images

      const tintCondition = () => {
            if (!!tint) {
                  return tint
            }
            return null
      }

      return (
            <ImageBackground
                  source={backgrounds[img]}
                  resizeMode="cover"
                  tintColor={tintCondition()}
                  style={[
                        styles.container,
                        {
                              zIndex: !!cover ? 1 : -1,
                              opacity: !!cover ? 0.2 : 0.2,
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