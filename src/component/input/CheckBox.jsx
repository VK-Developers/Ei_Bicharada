import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const {width} = Dimensions.get('screen');

export default function checkboxInput({info, action}) {
  const [selected, setSelected] = useState({yes: null, no: null});

  const handleChange = (value, condition) => {
    setSelected({ ...condition })

    action(prev => ({
      ...prev,
      andando: value
    }))
  };

 

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{info.title}?</Text>
      <View style={styles.selection}>
        <CheckBox
          value={selected['yes']}
          onValueChange={() => handleChange(true, {yes: true, no: false})}
          style={{marginRight: 2}}
          tintColors={{ false: 'black' }}
        />
        <Text style={[styles.label, {marginRight: 10}]}>sim</Text>
        <CheckBox
          value={selected['no']}
          onValueChange={() => handleChange(false, {yes: false, no: true})}
          style={{marginRight: 2}}
          tintColors={{ false: 'black' }}
        />
        <Text style={[styles.label, {marginRight: 10}]}>nao</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    color: 'black',
    fontWeight: '600',
    marginRight: 10,
  },
  selection: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  label: {
    fontWeight: '500',
    color: 'black',
    fontSize: 24
  }
});
