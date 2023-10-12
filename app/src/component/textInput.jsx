import React, {useState, useRef, useEffect} from 'react';
import { StyleSheet, View, Text, Dimensions, TextInput } from 'react-native';
import HandleScroll from '../hooks/HandleScroll';
import formatKey from '../hooks/formatKey';

const { width } = Dimensions.get('window');

function InputText({info, baseRef, action, btn}) {
  const {title, maxLength, type} = info;
  const [text, setText] = useState(info.title === 'Telefone' ? '+55 ' : '');
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

  const phoneFormat = (i) => {
    const initial = i.length;
    const state = text.length;

    if (state > initial && state > 3) {
      if (i.length === 6) return setText(`${i}`);
      if (i.length === 12) return setText(`${i}`)
    }
    if (i.length === 6) return setText(`${i} `);
    if (i.length === 12) return setText(`${i}-`)
    initial > 3 && setText(i);
  }

  const cepFormat = (i) => {
    const initial = i.length;
    const state = text.length;
    
    if (i.length === 5 && state > initial) return setText(`${i}`);
    if (i.length === 5) return setText(`${i}-`);

    setText(i);
  }

  return (
    <View style={occurrence ? styles.occurrence : styles.container}>
        <Text style={styles.text}>{title}:</Text>
        <TextInput
          ref={inputRef}
          onFocus={() => {
            !!btn && btn(false)
            HandleScroll(inputRef, baseRef, 100)
          }}
          onBlur={() => {
            !!btn && btn(true)
          }}
          keyboardType={type}
          returnKeyType="done"
          editable
          numberOfLines={occurrence ? 3 : 1}
          multiline={occurrence ? true : false}
          maxLength={maxLength}
          onChangeText={type !== 'default' ? 
            (title === 'Data' ? dateFormat : (
              title === 'Telefone' ? phoneFormat : (
                title === 'CEP' ? cepFormat : phoneFormat
              ))) 
            : 
            setText }
          value={text}
          secureTextEntry={ title === 'Senha' || title === 'Novamente' && true }
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