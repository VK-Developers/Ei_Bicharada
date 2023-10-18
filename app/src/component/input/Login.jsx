import React, {useContext} from 'react';
import Context from '../../context/Context';
import { View, Text, TextInput, StyleSheet, Platform } from 'react-native';

export default function LoginInput({title, placeholder, type}) {
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
      <TextInput
        value={login[type]}
        onChangeText={handleChange}
        placeholder={placeholder}
        style={[styles.input, isIOS, valid]}
        placeholderTextColor='black'
        secureTextEntry={type === 'password' && true}
      />
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