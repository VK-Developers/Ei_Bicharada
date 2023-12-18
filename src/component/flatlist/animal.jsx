import React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';

import str from '../../localized/strings';
import images from '../../localized/images';

function Animal({info, nav}) {
      const handleClick = () => nav.navigate('Animal', {...info, server: str.server});

      return (!!info && !!nav) ? (
            <TouchableOpacity style={styles.container} onPress={handleClick}>
                  <Image style={styles.img} source={{uri: str.server + info.picture}} />
                  <View style={styles.info}>
                        <View style={[styles.desc, {marginBottom: 5}]}>
                              <Text style={{color: 'black', fontWeight: '600', marginRight: 15}}>{str.name + ':'}</Text>
                              <Text style={{color: 'black', fontWeight: '800', fontSize: 16}}>{info.name}</Text>
                        </View>
                        <View style={styles.desc}>
                              <Text numberOfLines={4} style={styles.text}>{info.description}</Text>
                        </View>
                  </View>
            </TouchableOpacity>
      ) : (
            <View style={[styles.container, { justifyContent: 'space-around', marginTop: 20 }]}>
                  <Image style={{width: 90, height: 90}} source={images.backgrounds.one} />
                  <View style={styles.info}>
                        <View style={[styles.desc, {marginBottom: 5}]}>
                              <Text style={{color: 'black', fontWeight: '700', marginRight: 15}}>{str.name + ':'}</Text>
                              <Text style={{color: 'black', fontWeight: '800', fontSize: 16}}>Nome do Pet</Text>
                        </View>
                        <View style={styles.desc}>
                              <Text numberOfLines={4} style={[styles.text, {textAlign: 'center'}]}>Uma descrição objetiva e breve</Text>
                        </View>
                  </View>
            </View>
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
            fontWeight: '500',
            textAlign: 'justify',  
      }
})

export default Animal;