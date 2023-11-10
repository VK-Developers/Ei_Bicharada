import React, {useEffect, useState} from 'react';
import Clipboard from '@react-native-clipboard/clipboard';
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity, Alert } from 'react-native';

import str from '../../localized/strings';

const { height } = Dimensions.get('screen');
//Components
import Footer from '../../component/Footer';
import Header from '../../component/Header';
import ToggleMenu from '../../component/ToggleMenu';
import Background from '../../component/Background';

import { contributionRegionCalc } from '../../services/contribution';

import images from '../../localized/images';

function Contribuicao({route: { params }}) {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    async function FetchData() {
      const getAmount = await contributionRegionCalc(params.token);
      setAmount((getAmount === null || !getAmount) ? 0 : getAmount)
  }
  FetchData();
  }, [])

  const handlePress = () => {
    Clipboard.setString(str.pixKey);
    Alert.alert(null, str.donateAlert);
  }
  
  return (
    <>
    <Background img={'tree'} />
    <ToggleMenu />
      <View style={styles.container}>
        <View style={{ flexGrow: 1 }}>
          <Header name={params.name} />
        </View>
        <Text style={styles.donateBtn.title}>{str.donateTitle}</Text>
        <TouchableOpacity onPress={handlePress} style={styles.donateBtn}>
          <Text style={styles.donateBtn.placeholder}>{str.donateBtn}</Text>
        </TouchableOpacity>
        <Footer />
      </View>
      <Image source={images.piggy} style={styles.piggy}/>
      <Text style={styles.money}>{'R$ ' + amount.toFixed(2).replace('.', ',')}</Text>
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
    padding: 40,
  },
  text: {
    color: 'black',
    fontWeight: '800',
    fontSize: 28,
    textAlign: 'center',
  },
  bar: {
    width: 130,
    height: 5,
    alignSelf: 'center',
    backgroundColor: 'black',
    borderRadius: 20,
  },
  piggy: {
    width: 300,
    height: 300,
    position: 'absolute',
    zIndex: 0,
    top: height * 0.20,
    alignSelf: 'center'
  },
  money: {
    color: 'black',
    position: 'absolute',
    zIndex: 1,
    top: height * 0.4,
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: '800'
  },
  donateBtn: {
    backgroundColor: '#F8C8DC',
    padding: 10, 
    marginBottom: 20, 
    marginTop: 15, 
    width: "70%", 
    alignSelf: 'center', 
    borderRadius: 20,
    title: {
      color:'black',
      fontSize: 22,
      fontWeight: '700',
      alignSelf: 'center',
    },
    placeholder: {
      color:'black',
      fontSize: 20,
      fontWeight: '700',
      textAlign: 'center'
    }
  }
})

export default Contribuicao;