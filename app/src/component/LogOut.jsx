import React, {useContext} from 'react';
import Context from '../context/Context';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

import images from '../localized/images';

function LogOut() {
  const { setLogin, setToken } = useContext(Context);
  const { navigate } = useNavigation();

  const handlePress = () => {
    setToken('');
    setLogin({email: '', password: '', status: true});
    navigate('Login')
  }

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Image style={styles.logo} source={images.logout} />
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(196,195,208, 1)',
    position: 'absolute',
    zIndex: 200,
    bottom: 10,
    right: 15,
    padding: 10,
    borderRadius: 10,
  },
  logo: {
    marginLeft: 8,
    width: 50,
    height: 50
  }
})


export default LogOut;