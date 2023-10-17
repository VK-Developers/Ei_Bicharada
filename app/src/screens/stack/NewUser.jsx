import React, {useRef, useState, useEffect, useContext} from 'react';
import Context from '../../context/Context';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text } from 'react-native';
//Components
import TextInput from '../../component/textInput';
import Background from '../../component/background';
import { NewUser as structure, regions } from '../../localized/structures';
import str from '../../localized/strings';
import validateForms from '../../hooks/validateForms';

import { postUser } from '../../services/postRequest';

function NewUser({navigation}) {
  const { setLogin } = useContext(Context);
  const [type, setType] = useState('basic');
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [sendForms, setSendForms] = useState(false);
  const [listiner, setLister] = useState({});

  const scrollViewRef = useRef();

  useEffect(() => {
    const canSendIt = validateForms(listiner, 3);
    setSendForms(canSendIt[type]);
  }, [listiner, type]);
 
  const handlePress = async () => {
    if (type === 'basic') {
      // ver se o email ja existe
      console.log(listiner.email)
    }

    if (type === 'password') {
      // const addUser = await postUser(listiner);
      console.log(listiner)
      setLogin(prev => ({
        ...prev,
        email: listiner.email,
        status: true
      }));
      navigation.navigate('Login');
    }

    setType(prev => {
      if (prev === 'basic') return 'city';
      if (prev === 'city') return 'password'
      return prev
    })
  }

  return (
    <>
      <Background img={'tree'} />
      <ScrollView ref={scrollViewRef} extraScrollHeight={20} keyboardShouldPersistTaps="handled">
        <View style={styles.titleContainer}>
          <Text style={styles.titleContainer.text}>{str.newUser[type][0]}</Text>
        </View>

        {/* basics */}
        <View style={[styles.container, type !== 'basic' && {display: 'none' }]}>
          {
            structure.basic.map((text, i) => {
              return (
                <TextInput 
                  key={'user-basic-' + i} 
                  info={text}
                  action={setLister}
                  baseRef={scrollViewRef}
                  btn={setIsButtonVisible}
                />
              )
            })
          }
        </View>

        {/* city */}
        <View style={[styles.container, type !== 'city' && {display: 'none' }]}>
        {
          regions.map((regiao, i) => {
            const divisionText = 'Regiao ' + (i + 1);
            return (
              <View key={divisionText} style={styles.regionContainer}>
                <Text style={styles.regionContainer.title}>{divisionText}</Text>
                {
                  regiao.map(local => {
                    return (
                      <TouchableOpacity
                        key={local}
                        style={[styles.regionContainer.btn, listiner.region === local && {backgroundColor: 'blue'}]}
                        onPress={() => setLister(prev => ({...prev, region: prev.region === local ? '' : local}))}
                      >
                        <Text style={[styles.regionContainer.btn.text, listiner.region === local && {color: 'white'}]}>{local}</Text>
                      </TouchableOpacity>
                    )
                  })
                }
              </View>
            )
          })
        }
        </View>

        {/* password */}
        <View style={[styles.container, type !== 'password' && {display: 'none' }]}>
        {
          structure.password.map((text, i) => {
            return (
              <TextInput 
                key={'user-password-' + i} 
                info={text}
                action={setLister}
                baseRef={scrollViewRef}
                btn={setIsButtonVisible}
              />
            )
          })
        }
        </View>

      </ScrollView>
      {isButtonVisible && (
        type !== 'city' ? (
          <TouchableOpacity 
            onPress={handlePress}
            disabled={!sendForms}
            style={[styles.submitBtn, !sendForms && { backgroundColor: 'gray' }]} 
          >
              <Text style={styles.submitBtn.text}>{str.newUser[type][1]}</Text>
          </TouchableOpacity>
        ) : (!!listiner.region && (
          <TouchableOpacity 
            onPress={handlePress}
            disabled={!sendForms}
            style={[styles.submitBtn, !sendForms && { backgroundColor: 'gray' }]} 
          >
              <Text style={styles.submitBtn.text}>{str.newUser[type][1]}</Text>
          </TouchableOpacity>
        ))
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingLeft: 15,
  },
  titleContainer: {
    padding: 20,
    marginTop: 15,
    text: {
      textAlign: 'center',
      color: 'black',
      fontSize: 26,
      fontWeight: '700'
    }
  },
  regionContainer: {
    padding: 10,
    title: {
      fontSize: 20,
      color: 'black',
      fontWeight: '600',
      margin: 10
    },
    btn: {
      backgroundColor: 'gray',
      marginBottom: 10,
      width: 200,
      alignSelf: 'center',
      padding: 20,
      marginLeft: 50,
      borderRadius: 30,
      text: {
        textAlign: 'center',
        fontSize: 16,
        color: 'black',
        fontWeight: '600'
      }
    }
  },
  submitBtn: {
    position: 'absolute',
    bottom: 40,
    backgroundColor: 'blue',
    width: "80%",
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    text: {
      color: 'white',
      fontSize: 18,
      fontWeight: '600'
    }
  }
})

export default NewUser;
