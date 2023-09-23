import React, {useContext} from 'react';
import Context from '../context/Context';
import { StyleSheet, TouchableOpacity, View, ScrollView, Dimensions } from 'react-native';

import MenuLinks from './menu/MenuLinks';
import { menuTopics as topics } from '../localized/structures';



const {width, height} = Dimensions.get('screen')

function ToggleMenu() {
  const {menu, setMenu} = useContext(Context);


  const handlePress = () => setMenu(!menu)

  return !menu ? (
    <TouchableOpacity style={styles.containerClose} onPress={handlePress}>
      { [...Array.from({length: 3})].map((_b, i) => <View key={'bar' + i} style={styles.bar} /> )}
    </TouchableOpacity>
  ) : (
    <>
      <View style={styles.mask}>
        <View style={styles.background} />
        <TouchableOpacity style={styles.rest} onPress={handlePress} />
      </View>
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
    height: 30,
    justifyContent: 'space-between',
    zIndex: 100
  },
  bar: {
    backgroundColor: 'black',
    width: '90%',
    height: '20%',
    borderRadius: 15
  },
  containerOpen: {
    width: width * 0.8,
    position: 'absolute',
    top: 0,
    zIndex: 99
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
  mask: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    zIndex: 10,
    width,
    height
  },
  background: {
    height,
    width: width * 0.8,

    backgroundColor: 'rgba(0, 0, 0, 0.62)',
  },
  rest: {
    height,
    flexGrow: 1,
  }
})

export default ToggleMenu;