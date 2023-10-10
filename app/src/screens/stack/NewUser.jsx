import React, {useRef, useState, useEffect} from 'react';
import { StyleSheet, View, ScrollView, Dimensions, TouchableOpacity, Text } from 'react-native';
//Components
import TextInput from '../../component/textInput';
// import CheckboxInput from '../../component/checkboxInput';
import Background from '../../component/background';
import { NewUser as arrayText } from '../../localized/structures';
// import str from '../../localized/strings';
import validateForms from '../../hooks/validateForms';

function NewUser({navigation, route: { params }}) {
  const [listiner, setLister] = useState({});
  const [modal, setModal] = useState(false);
  const [sendForms, setSendForms] = useState(false);
  const scrollViewRef = useRef();

  useEffect(() => {
    const canSendIt = validateForms(listiner, 3);
    setSendForms(canSendIt)

    console.log(listiner)
  }, [listiner]);

  const handlePress = () => {
    navigation.navigate('Login')
  }

  return (
    <>
      <Background img={'tree'} />
      {/* <Sent 
        show={modal}
        action={setModal}
        nav={navigation}
        text={str.modal.resgate}
      /> */}
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
                    />
                  )
                })
              }
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.submitBtn} onPress={handlePress}>
          <Text style={styles.submitBtn.text}>CRIAR CONTA</Text>
      </TouchableOpacity>
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
