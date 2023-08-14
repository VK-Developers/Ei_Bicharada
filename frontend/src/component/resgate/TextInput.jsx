import React, {useState, useRef} from 'react';
import { StyleSheet, View, Text, Dimensions, TextInput } from 'react-native';
import HandleScroll from '../../hooks/HandleScroll';
const { width } = Dimensions.get('window');

function InputText({info, baseRef}) {
  const [text, setText] = useState('');
  const {title, maxLength, type} = info;
  const inputRef = useRef();

  const hourFormat = (i) => {
    const didDelete = text.length > i.length;

    if (!!didDelete) return setText('')
    
    if (i.length === 2) {
      const checkLiminit = Number(i) > 24
      const formatTo24hr = Number(i) === 24
      if (checkLiminit) return setText('')
      if (formatTo24hr) return setText('00:')
    }

    if (i.length === 5) {
      const houAndMin = i.split(':')
      const checkLiminit = Number(houAndMin[1]) > 59
      if (checkLiminit) return setText(`${houAndMin[0]}:`)
    }

    const textToAdd = i.length !== 2 ? i : i + ':'
    setText(textToAdd);
    return
  }

  return (
    <View style={styles.container}>
        <Text style={styles.text}>{title}:</Text>
        <TextInput
          ref={inputRef}
          onFocus={() => HandleScroll(inputRef, baseRef, 100)}
          keyboardType={type}
          returnKeyType="done"
          editable
          numberOfLines={1}
          maxLength={maxLength}
          onChangeText={type !== 'default' ? hourFormat : setText }
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
    fontSize: 26,
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