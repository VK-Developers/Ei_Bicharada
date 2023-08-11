import React, {useState} from 'react';
import { StyleSheet, View, Text, Dimensions, TextInput } from 'react-native';

const { width } = Dimensions.get('window');

function InputText({info}) {
  const [text, setText] = useState('');
  const {title, maxLength, type} = info;

  // Esta colando no formato mas caso eu queria apagar os : nao consigo
  const hourFormat = (i) => {
    const textToAdd = i.length !== 2 ? i : i + ':'

    setText(textToAdd)
  }

  return (
    <View style={styles.container}>
        <Text style={styles.text}>{title}:</Text>
        <TextInput
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