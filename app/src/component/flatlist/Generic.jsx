import React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';

import str from '../../localized/strings';

function Generic({info, action}) {
      const handlPress = () => {
            action.modal(true);
            action.choose(info)
      };

      return (
            <TouchableOpacity style={styles.container} onPress={handlPress}>
                  <Image style={styles.img} source={{uri: str.server + info.picture}} />
                  <View style={styles.info}>
                        <View style={[styles.desc, {marginBottom: 5}]}>
                              <Text style={{color: 'black', fontWeight: '600', marginRight: 15}}>Animal:</Text>
                              <Text style={{color: 'black', fontWeight: '800', fontSize: 16}}>{info.animal}</Text>
                        </View>
                        <View style={[styles.desc, {marginBottom: 5}]}>
                              <Text style={{color: 'black', fontWeight: '600', marginRight: 15}}>Andando:</Text>
                              <Text style={{color: 'black', fontWeight: '800', fontSize: 16}}>{info.walking ? 'Sim' : 'Não'}</Text>
                        </View>
                        <View style={[styles.desc, {marginBottom: 5}]}>
                              <Text style={{color: 'black', fontWeight: '800', fontSize: 16}}>{info.adress}</Text>
                        </View>
                  </View>
            </TouchableOpacity>

      )
}

const styles = StyleSheet.create({
      container: {
            marginBottom: 15,
            flexDirection: 'row',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            width: "95%",
            borderRadius: 15,
            alignSelf: 'center'
      },
      img: {
            width: 130,
            height: 110,
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
            justifyContent: 'flex-start',
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

export default Generic;