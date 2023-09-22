import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

function ToggleMenu() {
  const closed = () => {
    return (
      <TouchableOpacity style={styles.container}>
        <View style={styles.bar} />
        <View style={styles.bar} />
        <View style={styles.bar} />
      </TouchableOpacity>
    )
  }

  const opened = () => {}
  return closed();
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 15,
    left: 20,
    width: 45,
    height: 35,
    justifyContent: 'space-between'
  },
  bar: {
    backgroundColor: 'black',
    width: '100%',
    height: '20%',
    borderRadius: 15
  }
})

export default ToggleMenu;