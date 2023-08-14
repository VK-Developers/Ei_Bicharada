import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

const { height} = Dimensions.get('window');

function Header({name}) {
  return (
    <View style={styles.title}>
      <Text style={styles.title.text}>{name.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    height: height * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    text: {
      color: 'red',
      fontSize: 26,
      fontWeight: '800'
    }
  }
})

export default Header;