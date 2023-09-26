import React, {useContext} from 'react';
import Context from '../context/Context';
import { StyleSheet, TouchableOpacity, View, ScrollView, Dimensions } from 'react-native';

import MenuLinks from './menu/MenuLinks';
import { menuTopics as topics } from '../localized/structures';

const {width, height} = Dimensions.get('screen')

function ToggleMenu({level, first}) {
  const {menu, setMenu} = useContext(Context);

  const handlePress = () => setMenu(!menu);
  return !menu ? (
    <TouchableOpacity  style={[styles.containerClose, {display: level >= 25 ? 'none' : 'flex' }]} onPress={handlePress}>
      { [...Array.from({length: 3})].map((_b, i) => <View key={'bar' + i} style={styles.bar} /> )}
    </TouchableOpacity>
  ) : (
    <>
      <View style={styles.mask}>
        <View style={styles.background} />
        {!first ? (
          <TouchableOpacity style={styles.rest} onPress={handlePress} />
        ) : (
          <View style={styles.rest} />
        )}
      </View>
      <View style={styles.containerOpen}>
        {!first && (
          <TouchableOpacity style={styles.close} onPress={handlePress}>
            <View style={[styles.bar, styles.closeBar, { transform: [{ rotate: '45deg' }] }]} />
            <View style={[styles.bar, styles.closeBar, { transform: [{ rotate: '-45deg' }] }]} />
          </TouchableOpacity>
        )}
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
    width: width * 0.85,
    position: 'absolute',
    top: 0,
    zIndex: 11
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
    marginTop: 40,
  },
  mask: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    zIndex: 10,
    width,
    height: height * 0.95,
  },
  background: {
    backgroundColor: 'rgba(196,195,208, 1)',
    width: width * 0.85,
    borderBottomRightRadius: 1000
  },
  rest: {
    flexGrow: 1,
  }
})

export default ToggleMenu;