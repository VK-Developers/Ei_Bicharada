import React, {useRef, useState, useEffect} from 'react';
import { StyleSheet, View, ScrollView, Dimensions } from 'react-native';
//Components
import TextInput from '../../component/textInput';
import CheckboxInput from '../../component/checkboxInput';
import Background from '../../component/background';
import { NewUser as arrayText } from '../../localized/structures';
import str from '../../localized/strings';
import validateForms from '../../hooks/validateForms';


const { height } = Dimensions.get('screen');

function NewUser({navigation, route: { params }}) {
  const [listiner, setLister] = useState({});
  const [modal, setModal] = useState(false);
  const [sendForms, setSendForms] = useState(false);
  const scrollViewRef = useRef();

  useEffect(() => {
    const canSendIt = validateForms(listiner, 3);
    setSendForms(canSendIt)

    // console.log(listiner)
  }, [listiner]);

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
                      key={text.title} 
                      info={text}
                      action={setLister}
                      baseRef={scrollViewRef}
                    />
                  )
                })
              }
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingLeft: 20,
  }
})

export default NewUser;
