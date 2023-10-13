import React, {useRef, useState, useEffect, useContext} from 'react';
import Context from '../../context/Context';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text } from 'react-native';
//Components
import TextInput from '../../component/textInput';
import Background from '../../component/background';
import { NewUser as arrayText } from '../../localized/structures';
import str from '../../localized/strings';
import validateForms from '../../hooks/validateForms';
import UserModal from '../../component/modals/Sent'

import { postUser } from '../../services/postRequest';

function NewUser({navigation}) {
  const { setLogin } = useContext(Context);
  const [listiner, setLister] = useState({});
  const [modal, setModal] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [sendForms, setSendForms] = useState(false);
  const scrollViewRef = useRef();

  useEffect(() => {
    const canSendIt = validateForms(listiner, 3);
    setSendForms(canSendIt);
  }, [listiner]);

  const handlePress = async () => {
    const addUser = await postUser(listiner);

    if (addUser !== 201) {
      setModal(true)
      return
    }

    setLogin(prev => ({
      ...prev,
      email: listiner.email,
      status: true
    }));
    navigation.navigate('Login');
  }

  return (
    <>
      <Background img={'tree'} />
      { !!modal && <UserModal nav={false} show={modal} action={setModal} text={str.modal.newUser} /> }
      <ScrollView ref={scrollViewRef} extraScrollHeight={20} keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
              { 
                arrayText.map((text, i) => {
                  return (
                    <TextInput 
                      key={'newUser-' + i} 
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
        <TouchableOpacity 
          disabled={!sendForms} 
          onPress={handlePress}
          style={[styles.submitBtn, !sendForms && { backgroundColor: 'gray' }]} 
        >
            <Text style={styles.submitBtn.text}>{str.createAccount}</Text>
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingLeft: 20,
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
