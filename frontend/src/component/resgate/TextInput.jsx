import React from 'react';
import { StyleSheet, View, Text, Dimensions, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

function TextInput({title}) {
  const { navigate } = useNavigation();


  return (
    <View>
        <Text style={styles.text}>{title}:</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    height: width * 0.12,
  },
  text: {
    color: 'black',
    fontSize: 24,
    fontWeight: '600'
  },
  logo: {
    width: 35,
    height: 35,
    marginLeft: width * 0.1,
    marginRight: 15
  }
})

export default TextInput;