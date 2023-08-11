import React, {useState} from 'react';
import { StyleSheet, View, Text, Dimensions, TextInput } from 'react-native';

const { width } = Dimensions.get('window');

function InputText({info}) {
  const [text, setText] = useState('');
  const {title, max, type} = info;

  // const handleChanges 
  // formatar para hh:mm

  return (
    <View style={styles.container}>
        <Text style={styles.text}>{title}:</Text>
        <TextInput
          keyboardType={type}
          returnKeyType="done"
          editable
          numberOfLines={1}
          maxLength={max}
          onChangeText={setText}
          value={text}
          style={styles.input}
        />
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
  input: {
    fontSize: 22,
    color: 'black',
    fontWeight: '600',
    flexGrow: 1
  }
})

export default InputText;