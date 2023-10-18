import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

import images from '../../localized/images';
import str from '../../localized/strings';

function NewAnimal({type}) {
  // const []

  const handleClick = () => {
    console.log(type)
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleClick}>
      <Image source={images.plus} style={styles.plus} />
      <Text style={styles.text}>{str.newPet[type]}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    alignSelf: 'center',
    width: "95%",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  plus: {
    width: 25,
    height: 25,
    marginRight: 20,
  },
  text: {
    color: 'black',
    fontSize: 18,
    fontWeight: '800'
  },
})

export default NewAnimal;