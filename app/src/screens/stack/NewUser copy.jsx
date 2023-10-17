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
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [sendForms, setSendForms] = useState(false);
  const [listiner, setLister] = useState({});
  const [data, setData] = useState({});

  const scrollViewRef = useRef();
  
  // const [modal, setModal] = useState(false);
  

  useEffect(() => {
    const canSendIt = validateForms(listiner, 3);
    setSendForms(canSendIt[questionIndex + 1]);
    console.log(listiner)
  }, [listiner]);

  const handleContinue = async () => {
    setData(prev => ({...prev, [questionIndex]: listiner}));
    setLister({});
    setSendForms(false);
    setQuestionIndex(questionIndex + 1);
  }

  // const handleSubmit = async () => {
  //   const addUser = await postUser(listiner);

  //   if (addUser !== 201) {
  //     setModal(true)
  //     return
  //   }

  //   setLogin(prev => ({
  //     ...prev,
  //     email: listiner.email,
  //     status: true
  //   }));
  //   navigation.navigate('Login');
  // }

  return (
    <>
      <Background img={'tree'} />
      {/* { !!modal && <UserModal nav={false} show={modal} action={setModal} text={str.modal.newUser} /> } */}
      <ScrollView ref={scrollViewRef} extraScrollHeight={20} keyboardShouldPersistTaps="handled">
        <View style={styles.titleContainer}>
          <Text style={styles.titleContainer.text}>{str.newUserTitle[questionIndex]}</Text>
        </View>
        <View style={styles.container}>

          { 
            arrayText[questionIndex].map((text, i) => {
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
          onPress={questionIndex === 0 ? handleContinue : handleContinue}
          style={[styles.submitBtn, !sendForms && { backgroundColor: 'gray' }]} 
        >
            <Text style={styles.submitBtn.text}>{str.newUserSubmit[questionIndex]}</Text>
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
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



  selectCity: {
    backgroundColor: 'red',
    width: 250,
    alignSelf: 'center',
    padding: 10,
    marginTop: 30,
    borderRadius: 20
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
