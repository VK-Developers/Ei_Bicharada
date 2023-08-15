import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
//Components
import Footer from '../../component/footer';
import Header from '../../component/header';
import Return from '../../component/return';
import Background from '../../component/background'

function Doacao({navigation, route: { params }}) {
  return (
    <>
      <Background img={'tree'} />
      <SafeAreaView style={styles.container}>
        <View style={{flexGrow: 1}}>
          <View>
            <Return nav={navigation} />
            <Header name={params.name} />
          </View>
          
          <View style={{backgroundColor: 'green', flexGrow: 1}}>

          </View>

          
        </View>
        <Footer />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    height: '97%',
    justifyContent: 'space-between'
  },
})

export default Doacao;