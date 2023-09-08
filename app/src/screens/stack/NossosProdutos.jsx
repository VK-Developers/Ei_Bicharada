import React from 'react';
import { StyleSheet, ScrollView, Image, TouchableOpacity, View, Dimensions } from 'react-native';
//Components
import Footer from '../../component/footer';
import Header from '../../component/header';
import Return from '../../component/return';
import Background from '../../component/background'
import images from '../../localized/images';

// Most come from API
import {products} from '../../mock'

const { width } = Dimensions.get('screen');

function NossosProdutos({navigation, route: { params }}) {
  const handlePress = (load) => {
    navigation.navigate('Product', { ...load })
  }

  return (
    <>
    <Background img={'tree'} />
    <ScrollView style={styles.container}>
      <View>
        <Return nav={navigation} />
        <Header name={params.name} />
        <View style={styles.products}>
          {
            products.map((product, i) => (
              <TouchableOpacity style={styles.product} key={'product-' + i} onPress={() => handlePress(product)}>
                <Image source={images.backgrounds.one} style={styles.product.img} />
              </TouchableOpacity>
            ))
          }
        </View>
      </View>
      <Footer />
    </ScrollView>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
  products: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  product: {
    backgroundColor: 'gray',
    marginBottom: 10,
    borderRadius: 10,
    img: {
      width: width / 3.3,
      height: 120
    }
  }
  
})

export default NossosProdutos;