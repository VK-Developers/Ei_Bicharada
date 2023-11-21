import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
//Components
import Footer from '../../component/Footer';
import Header from '../../component/Header';
import Background from '../../component/Background';
import ToggleMenu from '../../component/ToggleMenu';

function PrestacaoDeContas({route: { params }}) {
  const googleView = 'https://docs.google.com/gview?embedded=true&url=';
  const url = 'https://atespets.com.br/accountabilities/current.pdf'

  return (
    <>
      <Background img={'tree'} />
      <ToggleMenu />
        <SafeAreaView style={styles.container}>
          <View style={{ flexGrow: 1 }}>
            <Header name={params.name} />
            <View style={{ flexGrow: 1 }}>
                <WebView
                  source={{ uri: googleView + url }}
                  style={{flexGrow: 1}}
                  cacheEnabled={false}
                  onError={(syntheticEvent) => {
                    const { nativeEvent } = syntheticEvent;
                    console.warn('WebView error:', nativeEvent);
                  }}
                />
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
  infoContainer: {
    marginTop: 70,
    marginBottom: 40
  },
  text: {
    color: 'black',
    fontWeight: '800',
    fontSize: 26,
    textAlign: 'center',
  },
  iconContainer: {
    alignSelf: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 20,
    icon: {
      width: 160,
      height: 150,
    }
  }
})

export default PrestacaoDeContas;