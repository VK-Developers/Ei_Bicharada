import React, {useContext} from 'react';
import Context from '../../context/Context';
import { StyleSheet, TouchableOpacity, Text, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import images from '../../localized/images';

function SOSKitty() {
  const { setMenu } = useContext(Context);
  const { navigate } = useNavigation();

  const handlePress = () => {
    setMenu(false)
    navigate('AbuseConfirm')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.link} onPress={handlePress}>
        <Image source={images.backgrounds.one} style={styles.logo}/>
        <Text style={styles.text}>S.O.S Kitty</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  link: {
    flexDirection: 'row',
  },
  text: {
    color: '#FF00FF',
    fontSize: 24,
    fontWeight: '600'
  },
  logo: {
    width: 35,
    height: 35,
    marginRight: 15,
    marginLeft: 10,
    tintColor: '#FF00FF'
  }
})

export default SOSKitty;