import React from 'react';
import { StyleSheet, View, Text, Dimensions, Platform } from 'react-native';

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
    marginTop: Platform.OS === 'ios' ? 25 : 0,
    height: height * 0.1,
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