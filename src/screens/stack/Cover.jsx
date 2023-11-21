import React, { useEffect, useContext } from 'react';
import Context from '../../context/Context';
import { StyleSheet, BackHandler, Dimensions, View, Platform } from 'react-native';
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
      <View style={styles.shape}/>
      <LogOut />
      <View style={{position: 'absolute', zIndex: 1}}>
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
  shape: {
    backgroundColor: 'rgba(196,195,208, 1)',
    position: 'absolute',
    width: width * 0.8,
    height,
    borderBottomRightRadius: 1000,
    zIndex: 1,
  },
  container: {
    // marginTop: 10,
    marginTop: Platform.OS === 'ios' ? 45 : 10,
    height: height * 0.85,
    width: width * 0.85,
    justifyContent: 'space-around',
    position: 'absolute',
    top: 0,
    zIndex: 2,
  }
})

export default Cover;