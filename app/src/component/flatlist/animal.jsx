import React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';

import str from '../../localized/strings'

function Animal({info}) {
      const {picture, description, name} = info;

      const handleClick = () => console.log(name)

      return (
            <TouchableOpacity style={styles.container} onPress={handleClick}>
                  <Image style={styles.img} source={{uri: picture}} />
                  <View style={styles.info}>
                        <View style={[styles.desc, {marginBottom: 5}]}>
                              <Text style={{color: 'black', fontWeight: '600', marginRight: 15}}>{str.name + ':'}</Text>
                              <Text style={{color: 'black', fontWeight: '800', fontSize: 16}}>{name}</Text>
                        </View>
                        <View style={styles.desc}>
                              <Text numberOfLines={4} style={styles.text}>{description}</Text>
                        </View>
                  </View>
            </TouchableOpacity>
      )
}

const styles = StyleSheet.create({
      container: {
            marginBottom: 10,
            padding: 10,
            flexDirection: 'row',
      },
      img: {
            width: 130,
            height: 130,
            borderRadius: 10,
      },
      info: {
            flexDirection: 'column',
  
            height: '100%',
            flexGrow: 1,
            padding: 15,
      },
      desc: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
      },
      text: {
            color: 'black',
            flex: 1,
            flexWrap: 'wrap',
            fontSize: 15,
            fontWeight: '400',
            textAlign: 'justify',  
      }
})

export default Animal;