import React, {useState, useEffect} from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

import camera from '../../hooks/camera';
import images from '../../localized/images';

function PicureIcon({action, state}) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    !!state.picture && setChecked(true)
  }, [state])

  const handlePress = () => {
    const openCamera = camera(action, 'camera');
    openCamera()
  }
  return (
    <TouchableOpacity style={styles.conteiner} onPress={handlePress}>
      <Image style={styles.icon} source={images.camera} />
      {checked && <Image style={styles.checked} source={images.checked} /> }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    alignSelf: 'flex-end',
  },
  icon: {
    width: 70,
    height: 70,
    marginRight: 60
  },
  checked: {
    width: 40,
    height: 25,
    position: 'absolute',
    right: 0,
    marginRight: 20,
    zIndex: 2,
  }
})

export default PicureIcon;