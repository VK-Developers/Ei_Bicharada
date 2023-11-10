import React, { useEffect, useContext } from 'react';
import Context from '../../context/Context';
import { StyleSheet, BackHandler, Dimensions, View } from 'react-native';
import MenuLinks from '../../component/button/Menu';
import { menuTopics as topics } from '../../localized/structures';
import Background from '../../component/Background';
import LogOut from '../../component/LogOut';
import SOSKitty from '../../component/button/SOSKitty';

const {height, width} = Dimensions.get('window');

function Cover() {
  const {setLoader} = useContext(Context);
  useEffect(() => {
    function RemoveBackHandler() {
        BackHandler.addEventListener('hardwareBackPress', () => true);
      }
      RemoveBackHandler();
    setLoader(false)
  }, [])

  return (
    <>
      <Background img={'tree'} cover={true} />
      <LogOut />
      <View>
        <View style={styles.mask}>
          <View style={styles.background} />
        </View>
        <View style={styles.container}>
            { 
              topics.map(topic => <MenuLinks key={topic + '-menu'} name={topic} />)
            }
            <SOSKitty />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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