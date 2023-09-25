import React, {useState, useRef, useEffect} from 'react';
import { StyleSheet, View, Text, Dimensions, TextInput } from 'react-native';
import HandleScroll from '../hooks/HandleScroll';
import formatKey from '../hooks/formatKey';

const { width } = Dimensions.get('window');

function InputText({info, baseRef, action}) {
  const [text, setText] = useState('');
  const {title, maxLength, type} = info;
  const inputRef = useRef();

  useEffect(() => {
    const key = formatKey(info.title)
    action(prev => ({
      ...prev,
      [key]: text,
    }))
  }, [text])

  const occurrence = (title === 'Ocorrido' || title === 'Descrição');

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

  const dateFormat = (i) => {
    const didDelete = text.length > i.length;

    if (!!didDelete) return setText('')
    
    if (i.length === 2) {
      const checkLiminit = Number(i) > 31
      if (checkLiminit) return setText('')
      return setText(`${i}/`)
    }

    if (i.length === 5) {
      const dateSplit = i.split('/');
      const checkLiminit = Number(dateSplit[1]) > 12;
      if (checkLiminit) return setText(`${dateSplit[0]}/`);
      return setText(`${dateSplit[0]}/${dateSplit[1]}/`);
    }

    const textToAdd = i.length !== 2 ? i : i + ':'
    setText(textToAdd);
    return
  }

  return (
    <View style={occurrence ? styles.occurrence : styles.container}>
        <Text style={styles.text}>{title}:</Text>
        <TextInput
          ref={inputRef}
          onFocus={() => HandleScroll(inputRef, baseRef, 100)}
          keyboardType={type}
          returnKeyType="done"
          editable
          numberOfLines={occurrence ? 3 : 1}
          multiline={occurrence ? true : false}
          maxLength={maxLength}
          onChangeText={type !== 'default' ? (title === 'Data' ? dateFormat : hourFormat) : setText }
          value={text}
          style={occurrence ? styles.occurrence.input : styles.input}
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
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
    flexGrow: 1
  },
  occurrence: {
    width,
    padding: 10,
    input: {
      backgroundColor: 'rgba(64, 64, 64, 0.1)',
      color: 'black',
      padding: 10,
      borderRadius: 20,
      fontSize: 17,
      fontWeight: '500',
      textAlign: 'justify',
    }
  }
})

export default InputText;