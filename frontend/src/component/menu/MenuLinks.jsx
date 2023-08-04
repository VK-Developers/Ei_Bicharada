import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import images from '../../localized/images';

const { width } = Dimensions.get('window');

function MenuLinks({name}) {
  const { navigate } = useNavigation();

  const handlePress = () => {
    const linkName = name.replace(/\s/g, '');
    navigate(linkName, { name })
  }

  return (
    <TouchableOpacity style={styles.link} onPress={handlePress}>
      <Image source={images.backgrounds.one} style={styles.logo}/>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    height: width * 0.12,
  },
  text: {
    color: 'red',
    fontSize: 24,
    fontWeight: '600'
  },
  logo: {
    width: 35,
    height: 35,
    marginLeft: width * 0.1,
    marginRight: 15
  }
})

export default MenuLinks;