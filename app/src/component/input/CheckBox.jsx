import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const {width} = Dimensions.get('screen');

export default function checkboxInput({info, action}) {
  const [selected, setSelected] = useState({});

  useEffect(() => {
    const key = Object.keys(selected)
    action(prev => ({
      ...prev,
      andando: key == 'op1' ? true : false
    }))
  }, [selected])

  const checkbox = (text, indice) => {
    const target = `op${indice + 1}`
    const handleChange = (param) => setSelected({ [target]: param })

    return (
      <View key={'check-' + indice} style={{flexDirection: 'row'}}>
        <CheckBox
          value={selected[target]}
          onValueChange={handleChange}
          style={{marginRight: 2}}
          tintColors={{ false: 'black' }}
        />
        <Text style={styles.label}>{text}</Text>
        
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{info.title}?</Text>
      <View style={styles.selection}>
        {
          info.options.map((e, i) => checkbox(e, i))
        }
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
    // backgroundColor: 'green',
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
