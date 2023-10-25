import React, {useContext, useState} from 'react';
import Context from '../../context/Context';
import { View, Text, TextInput, StyleSheet, Platform, TouchableOpacity, Image } from 'react-native';
import images from '../../localized/images';

export default function LoginInput({title, placeholder, type}) {
  const [showPassword, setShowPassword] = useState(false)
  const { login, setLogin } = useContext(Context);

  const isIOS = Platform.OS === 'ios' && {height: 50}
  const valid = !login.status && {borderColor: 'red', borderWidth: 1.5}

  const handleChange = (value) => {
    setLogin(prev => ({ 
      ...prev,
      status: true,
      [type.toLowerCase()]: value
    }))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={{position: 'relative'}}>
        <TextInput
          value={login[type]}
          onChangeText={handleChange}
          placeholder={placeholder}
          style={[styles.input, isIOS, valid]}
          placeholderTextColor='black'
          secureTextEntry={(type === 'password' && !showPassword) && true}
        />

        {type === 'password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{position: 'absolute', top: 10, right: 20}}>
            { !showPassword ? (
              <Image source={images.notVisible} style={{width: 30,height: 30}} />
            ) : (
              <Image source={images.visible} style={{width: 30,height: 30}} />
            )}  
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      marginBottom: 30
    },
    title: {
      marginBottom: 15,
      fontSize: 18,
      fontWeight: '700',
      color: 'black'
    },
    input: {
      backgroundColor: '#FFFFF0',
      borderRadius: 10,
      padding: 10,
      color: 'black',
      fontSize: 16,
    }
});