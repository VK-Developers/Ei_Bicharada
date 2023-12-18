import React, {useContext} from 'react';
import Context from '../../context/Context';
import { StyleSheet, TouchableOpacity, Text, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import format from '../../hooks/formatRouteName';

import images from '../../localized/images';

function MenuButtom({name}) {
  const {setMenu, token} = useContext(Context);
  const { navigate } = useNavigation();

  const handlePress = () => {
    setMenu(false)
    const linkName = format(name);
    navigate(linkName, { name, token })
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.link} onPress={handlePress}>
        <Image source={images.backgrounds.one} style={styles.logo}/>
        <Text  style={styles.text}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  link: {
    flexDirection: 'row',
  },
  text: {
    color: 'black',
    fontSize: 22,
    fontWeight: '700'
  },
  logo: {
    width: 35,
    height: 35,
    marginRight: 15,
    marginLeft: 10,
    tintColor: "#B87333",
  }
})

export default MenuButtom;