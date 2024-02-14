import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

import images from '../localized/images';

function LogOut() {
  const { navigate } = useNavigation();

  const handlePress = () => navigate('Ajuste');

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Image style={styles.logo} source={images.user} />
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBECC4',
    position: 'absolute',
    zIndex: 4,
    bottom: 10,
    right: 15,
    padding: 10,
    borderRadius: 30,
  },
  logo: {
    // marginLeft: 8,
    width: 40,
    height: 40,
    // tintColor: "#0A8C60"
  }
})


export default LogOut;