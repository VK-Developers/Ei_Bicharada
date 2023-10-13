import React, {useContext} from 'react';
import Context from '../../context/Context';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import { postLogin } from '../../services/postRequest';

export default function Buttom({title, type, action}) {
  const { login, setLogin, setToken } = useContext(Context);
  const {navigate} = useNavigation();

    const handlePress = async () => {
      type === 'newUser' && navigate('NewUser');
      action(true);
      const {status, ...inputValue} = login;

      const logIn = await postLogin(inputValue)
      if (!!logIn.token) {
        setToken(logIn.token)
        navigate('Cover')
        return
      };

      action(false);
      setLogin(prev => ({...prev, status: false}))
      return
    }

    return (
        <TouchableOpacity onPress={handlePress} style={styles.buttom}>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  buttom: {
    backgroundColor: 'white',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'black',
    fontSize: 18,
    fontWeight: '800'
  }
});