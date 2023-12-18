import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import formatName from '../../hooks/formatRouteName';

export default function LoginInput({title, placeholder, type, data}) {
  
  const TextType = () => {
    const keyName = formatName(title.toLowerCase())
    const handleChange = (value) => {      
      data.action(prev => ({ 
        ...prev,
        [keyName]: value,
      }))
    }

    return (
      <TextInput
        value={data.obj[title]}
        onChangeText={handleChange}
        placeholder={placeholder}
        style={styles.input}
        numberOfLines={keyName === 'descricao' ? 7 : 1}
        multiline={keyName === 'descricao' ? true : false}
        placeholderTextColor='black'
      />
    )
  }

  const CheckBoxType = () => {
    const [selected, setSelected] = useState({yes: null, no: null});

    const handleChange = (value, condition) => {
      setSelected({ ...condition })

      data.action(prev => ({ 
        ...prev,
        [title.toLowerCase()]: value,
      }))
    };

    return (
      <View style={styles.checkBox}>
        <CheckBox
          value={selected['yes']}
          onValueChange={() => handleChange(true, {yes: true, no: false})}
          style={{marginRight: 2}}
          tintColors={{ false: 'black' }}
        />
        <Text style={[styles.label, {marginRight: 10}]}>{placeholder[0]}</Text>
        <CheckBox
          value={selected['no']}
          onValueChange={() => handleChange(false, {yes: false, no: true})}
          style={{marginRight: 2}}
          tintColors={{ false: 'black' }}
        />
        <Text style={styles.label}>{placeholder[1]}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>
      {type === 'default' ? TextType() : CheckBoxType()}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      marginBottom: 30
    },
    title: {
      marginBottom: 5,
      fontSize: 18,
      fontWeight: '700',
      color: 'black'
    },
    input: {
      backgroundColor: "rgba(184, 115, 51, 0.5)",
      borderRadius: 10,
      padding: 10,
      color: 'black',
      fontSize: 16,
    },
    checkBox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      alignSelf: 'center'
    },
    label: {
      fontWeight: '500',
      color: 'black',
      fontSize: 20
    }
});