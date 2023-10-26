import React from 'react';
import { StyleSheet, Image, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import images from '../../localized/images';

const { width } = Dimensions.get('screen');

function Product({ info, nav }) {
      const handlePress = () => nav.navigate('Product', { ...info });

      return (
            <>
            <TouchableOpacity style={styles.container} onPress={handlePress}>
                  <ImageBackground
                        source={images.backgrounds.one}
                        style={[styles.picture, {position: 'absolute', zIndex: -1}]}
                        imageStyle={{opacity: 0.7}}
                  />
                  <Image 
                        source={{uri: info.picture}}
                        style={styles.picture}
                  />
            </TouchableOpacity>
            </>
      )
}

const styles = StyleSheet.create({
      container: {
            marginBottom: 10,
            borderRadius: 10,
            overflow: 'hidden'
      },
      picture: {
            width: width / 3.3,
            height: 120,
            objectFit: 'fill'
      }
})

export default Product;