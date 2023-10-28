import React, {useRef, useState, useEffect, useContext} from 'react';
import Context from '../../context/Context';
import CheckBox from '@react-native-community/checkbox';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text, Image } from 'react-native';
//Components
import TextInput from '../../component/input/Form';
import Background from '../../component/Background';
import EmailModal from '../../component/modals/Email';
import { NewUser as structure } from '../../localized/structures';
import str from '../../localized/strings';
import images from '../../localized/images';
import validateForms from '../../hooks/validateForms';

import { createUser } from '../../services/user';
import { regionList } from '../../services/region'

function NewUser({navigation}) {
  const { setLogin } = useContext(Context);
  const [type, setType] = useState('basic');
  const [regions, setRegions] = useState([]);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [sendForms, setSendForms] = useState(false);
  const [modal, setModal] = useState(false);
  const [listiner, setLister] = useState({});
  

  const scrollViewRef = useRef();

  useEffect(() => {
    async function FetchData() {
      const data = await regionList()
      setRegions(data)
    }
    FetchData()
  }, []);

  useEffect(() => {
    const canSendIt = validateForms(listiner, 3);
    setSendForms(canSendIt[type]);
  }, [listiner, type]);
 
  const handlePress = async () => {
    if (type === 'password') {
      const addUser = await createUser(listiner);
      
      if (addUser !== 203) {
        setLogin({
          email: listiner.email,
          password: '',
          status: true
        });
        navigation.navigate('Login');
        return
      }
      
      setModal(true)
    }

    setType('password')
  }

  return (
    <>
      <Background img={'tree'} />
      <EmailModal show={modal} action={setModal} data={setLister}/>
      
      {
        type === "password" && (
          <TouchableOpacity 
            style={styles.return}
            onPress={() => setType('basic')}
          >
            <Image source={images.arrow} style={styles.return.icon} />
          </TouchableOpacity>
        )
      }

      <ScrollView ref={scrollViewRef} extraScrollHeight={20} keyboardShouldPersistTaps="handled">
        {type !== 'city' && (
          <View style={styles.titleContainer}>
            <Text style={styles.titleContainer.text}>{str.newUser[type][0]}</Text>
          </View>
        )}

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

        <TouchableOpacity
          style={[styles.regionContainer.btn, { marginTop: 30, backgroundColor: '#6082B6' }]}
          onPress={() => setType('city')}
        >
          <Image source={images.backgrounds.one} style={styles.regionContainer.btn.icon}/>
          <Text style={[styles.regionContainer.btn.text]}>{(!listiner.region || listiner.region === '') ? "região de interesse" : listiner.region}</Text>
        </TouchableOpacity>
        </View>

        {/* city */}
        <View style={[styles.container, type !== 'city' && {display: 'none' }]}>
        {
          regions.map(({city}) => {
            const key = city.replace(' ', '_');
            return (
              <TouchableOpacity
                key={key}
                style={[styles.regionContainer.btn, listiner.region === city && {backgroundColor: '#6082B6'}]}
                onPress={() => {
                  setLister(prev => ({...prev, region: prev.region === city ? '' : city}))
                  setType('basic')
                }}
              >
                <Image source={images.backgrounds.one} style={styles.regionContainer.btn.icon}/>
                <Text style={[styles.regionContainer.btn.text, listiner.region === city && {color: 'white'}]}>{city}</Text>
              </TouchableOpacity>
            )
          })
        }
        </View>

        {/* password */}
        <View style={[styles.container, type !== 'password' && {display: 'none' }]}>
          {
            structure.password.map((text, i) => {
              const [showPassword, setShowPassword] = useState(false)
              const renderImage = !!showPassword ? images.visible : images.notVisible

              return (
                <View key={'user-password-' + i}>
                  <TextInput 
                    
                    info={text}
                    action={setLister}
                    baseRef={scrollViewRef}
                    btn={setIsButtonVisible}
                  />
                  {/* <TouchableOpacity onPress={() => setShowPassword(p => !p)}>
                    <Image source={renderImage} style={{bottom: 20, right: 30, width: 30, height: 30, position: 'absolute'}}/>
                  </TouchableOpacity> */}
                </View>
              )
            })
          }
        </View>

      </ScrollView>
      {(isButtonVisible && !modal) && (
        type !== 'city' && (
          <TouchableOpacity 
            onPress={handlePress}
            disabled={!sendForms}
            style={[styles.submitBtn, !sendForms && { backgroundColor: 'gray' }]} 
          >
              <Text style={styles.submitBtn.text}>{str.newUser[type][1]}</Text>
          </TouchableOpacity>
        )
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
