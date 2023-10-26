import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

import str from '../../localized/strings';

function SolicitationList({ state }) {
  const handlePress = () => {
    state.action(true)
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.text}>{str.solicitationBtn}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 10,
  },
  text: {
    color: 'black',
    fontSize: 18,
    fontWeight: '700'
  }
})

export default SolicitationList;