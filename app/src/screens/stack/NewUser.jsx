import React, {useRef, useState, useEffect, useContext} from 'react';
import Context from '../../context/Context';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text, Image } from 'react-native';
//Components
import TextInput from '../../component/input/Form';
import Background from '../../component/Background';
import EmailModal from '../../component/modals/Email';
import { NewUser as structure, regions } from '../../localized/structures';
import str from '../../localized/strings';
import images from '../../localized/images';
import validateForms from '../../hooks/validateForms';

import { postUser } from '../../services/postRequest';

function NewUser({navigation}) {
  const { setLogin } = useContext(Context);
  const [type, setType] = useState('basic');
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [sendForms, setSendForms] = useState(false);
  const [modal, setModal] = useState(false);
  const [listiner, setLister] = useState({});

  const scrollViewRef = useRef();

  useEffect(() => {
    const canSendIt = validateForms(listiner, 3);
    setSendForms(canSendIt[type]);
  }, [listiner, type]);
 
  const handlePress = async () => {
    if (type === 'password') {
      const addUser = await postUser(listiner);
      
      if (addUser !== 203) {
        setLogin(prev => ({
          ...prev,
          email: listiner.email,
          status: true
        }));
        navigation.navigate('Login');
        return
      }
      
      setModal(true)
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
      <EmailModal show={modal} action={setModal} data={setLister}/>
      
      {
        type !== "basic" && (
          <TouchableOpacity 
            style={styles.return}
            onPress={() => setType(prev => {
              if (prev === 'password') return 'city';
              if (prev === 'city') return 'basic'
              return prev
            })}
          >
            <Image source={images.arrow} style={styles.return.icon} />
          </TouchableOpacity>
        )
      }

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
                {
                  regiao.map(local => {
                    return (
                      <TouchableOpacity
                        key={local}
                        style={[styles.regionContainer.btn, listiner.region === local && {backgroundColor: '#6082B6'}]}
                        onPress={() => setLister(prev => ({...prev, region: prev.region === local ? '' : local}))}
                      >
                        <Image source={images.backgrounds.one} style={styles.regionContainer.btn.icon}/>
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
      {(isButtonVisible && !modal) && (
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
  },
  return: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
    icon: {
      width: 40,
      height: 40,
    }
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
    width: "100%",
    btn: {
      backgroundColor: '#B2BEB5',
      marginBottom: 10,
      width: "85%",
      alignSelf: 'center',
      padding: 15,
      borderRadius: 30,
      flexDirection: 'row',
      alignItems: 'center',
      icon: {
        width: 35,
        height: 35,
      },
      text: {
        flexGrow: 1,
        textAlign: 'center',
        fontSize: 18,
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
