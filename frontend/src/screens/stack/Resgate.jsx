import React from 'react';
import {  StyleSheet, SafeAreaView, Dimensions, View, Image, TouchableOpacity } from 'react-native';
//Components
import Footer from '../../component/footer';
import Header from '../../component/header';
import Return from '../../component/return';
import TextInput from '../../component/resgate/TextInput';
import Background from '../../component/background';
import { Resgate as arrayText } from '../../localized/structures';
import images from '../../localized/images';

const {height} = Dimensions.get('window')

function Resgate({navigation, route: { params }}) {
 
  return (
    <>
      <Background img={'tree'} />
      <SafeAreaView style={styles.container}>
        <Return nav={navigation} />
        <Header name={params.name} />
        <TouchableOpacity style={styles.media}>
          <Image style={styles.icon} source={images.camera} />
        </TouchableOpacity>
        <View style={styles.content}>
          {
            arrayText.map((elem) => 
              <TextInput 
                key={elem.title} 
                info={elem}
              />
            )
          }
        </View>
        
        <Footer />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
  // content: {
  //   // backgroundColor: 'green',
  //   height: height - (height * 0.14) - 160,
  // },
  media: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  icon: {
    width: 60,
    height: 60,
    marginRight: 40
  }
})

export default Resgate;