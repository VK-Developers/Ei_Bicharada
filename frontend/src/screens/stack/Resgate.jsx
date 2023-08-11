import React from 'react';
import {  StyleSheet, SafeAreaView, Dimensions, View } from 'react-native';
//Components
import Footer from '../../component/footer';
import Header from '../../component/header';
import Return from '../../component/return';
import TextInput from '../../component/resgate/TextInput';
import Background from '../../component/background';
import { Resgate as arrayText } from '../../localized/structures';

const {height} = Dimensions.get('window')

function Resgate({navigation, route: { params }}) {
 
  return (
    <>
      <Background img={'tree'} />
      <SafeAreaView style={styles.container}>
        <Return nav={navigation} />
        <Header name={params.name} />
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
  content: {
    // backgroundColor: 'green',
    height: height - (height * 0.14) - 160,
  },
})

export default Resgate;