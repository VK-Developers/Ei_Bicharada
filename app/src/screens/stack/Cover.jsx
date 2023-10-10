import React, { useEffect } from 'react';
import { StyleSheet, BackHandler, Dimensions, View } from 'react-native';
import MenuLinks from '../../component/menu/MenuLinks';
import { menuTopics as topics } from '../../localized/structures';

const {height, width} = Dimensions.get('window');

function Cover() {

  useEffect(() => {
    function RemoveBackHandler() {
        BackHandler.addEventListener('hardwareBackPress', () => true);
      }
      RemoveBackHandler();
  }, [])

  return (
    <>
      <View style={styles.backgroundSolid}/>
      <View>
        <View style={styles.mask}>
          <View style={styles.background} />
        </View>
        <View style={styles.container}>
            { 
              topics.map(topic => <MenuLinks key={topic + '-menu'} name={topic} />)
            }
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundSolid: {
    position: 'absolute',
    height,
    width,
    backgroundColor: '#0047AB',
    zIndex: 0,
  },
  mask: {
    position: 'absolute',
    top: 0,
    zIndex: 1,
    width,
    height: height * 0.95,
  },
  background: {
    backgroundColor: 'rgba(196,195,208, 1)',
    width: width * 0.8,
    height: height + 10,
    borderBottomRightRadius: 1000
  },
  container: {
    marginTop: 10,
    height: height * 0.85,
    width: width * 0.85,
    justifyContent: 'space-around',
    position: 'absolute',
    top: 0,
    zIndex: 2
  }
})

export default Cover;