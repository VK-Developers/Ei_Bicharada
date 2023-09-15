import React, {useContext} from 'react';
import Context from '../../context/Context';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import {getUsers} from '../../services/getRequest';

export default function Buttom({title, type}) {
  const { login, setLogin } = useContext(Context);
  const {navigate} = useNavigation();

    const handlePress = async () => {
      if (type === 'newUser') {
        console.log(type);
        return
      }

      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      const isEmailValid = emailRegex.test(login.email);
      const isPasswordValid = login.password.length >= 8;

      if (!isEmailValid | !isPasswordValid) {
        setLogin(prev => ({...prev, status: false}))
        return
      };

      const users = await getUsers();
      const foundedUser = users.some(({email}) => email === login.email);

      foundedUser && navigate('Menu')
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