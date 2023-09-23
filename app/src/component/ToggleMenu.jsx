import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity, View, ScrollView, Dimensions } from 'react-native';

import MenuLinks from './menu/MenuLinks';
import { menuTopics as topics } from '../localized/structures';

const {width, height} = Dimensions.get('screen')

function ToggleMenu() {
  const [isOpened, setIsOpened] = useState(false);

  const handlePress = () => setIsOpened(!isOpened)

  return !isOpened ? (
    <TouchableOpacity style={styles.containerClose} onPress={handlePress}>
      { [...Array.from({length: 3})].map((_b, i) => <View key={'bar' + i} style={styles.bar} /> )}
    </TouchableOpacity>
  ) : (
    <>
      <View style={styles.background} />
      <View style={styles.containerOpen}>
        <TouchableOpacity style={styles.close} onPress={handlePress}>
          <View style={[styles.bar, styles.closeBar, { transform: [{ rotate: '45deg' }] }]} />
          <View style={[styles.bar, styles.closeBar, { transform: [{ rotate: '-45deg' }] }]} />
        </TouchableOpacity>
        <ScrollView style={styles.topics}>
          { 
            topics.map(topic => <MenuLinks key={topic + '-menu'} name={topic} />)
          }
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containerClose: {
    position: 'absolute',
    top: 15,
    left: 20,
    width: 45,
    height: 35,
    justifyContent: 'space-between'
  },
  bar: {
    backgroundColor: 'black',
    width: '100%',
    height: '20%',
    borderRadius: 15
  },
  containerOpen: {
    width: width * 0.8,
  },
  close: {
    position: 'absolute',
    top: 15,
    right: 20,
    width: 45,
    height: 35,

    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  closeBar: {
    position: 'absolute',
    width: '80%'
  },
  topics: {
    marginTop: 20,
  },
  background: {
    height,
    width: width * 0.8,

    position: 'absolute',
    top: 0,
    zIndex: -1,

    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  }
})

export default ToggleMenu;