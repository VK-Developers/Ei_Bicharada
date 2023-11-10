import React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';

import str from '../../localized/strings';

function GenericAnimal({info, action}) {
      const handleClick = () => {
            action.modal(true);
            action.choose(info)
      }

      return (
            <TouchableOpacity style={styles.container} onPress={handleClick}>
                  <Image style={styles.img} source={{uri: str.server + info.picture}} />
                  <View style={styles.info}>
                        <View style={[styles.desc, {marginBottom: 5}]}>
                              <Text style={{color: 'black', fontWeight: '600', marginRight: 15}}>Nome:</Text>
                              <Text style={{color: 'black', fontWeight: '800', fontSize: 16}}>{info.name}</Text>
                        </View>
                        <View style={[styles.desc, {marginBottom: 5}]}>
                              <Text style={{color: 'black', fontWeight: '600', marginRight: 15}}>Castrado(a):</Text>
                              <Text style={{color: 'black', fontWeight: '800', fontSize: 16}}>{info.neutered ? 'Sim' : 'Não'}</Text>
                        </View>
                        <View style={[styles.desc, {marginBottom: 5}]}>
                              <Text style={{color: 'black', fontWeight: '600', marginRight: 15}}>Animal:</Text>
                              <Text style={{color: 'black', fontWeight: '800', fontSize: 16}}>{info.animal}</Text>
                        </View>
                        <View style={[styles.desc, {marginBottom: 5}]}>
                              <Text style={{color: 'black', fontWeight: '600', marginRight: 15}}>Sexo:</Text>
                              <Text style={{color: 'black', fontWeight: '800', fontSize: 16}}>{info.neutered ? 'Macho' : 'Fêmea'}</Text>
                        </View>
                  </View>
            </TouchableOpacity>

      )
}

const styles = StyleSheet.create({
      container: {
            marginBottom: 20,
            flexDirection: 'row',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            width: "95%",
            borderRadius: 15,
            alignSelf: 'center'
      },
      img: {
            width: 130,
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

export default GenericAnimal;