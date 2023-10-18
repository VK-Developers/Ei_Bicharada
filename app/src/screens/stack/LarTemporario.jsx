import React, {useRef, useState, useEffect} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, ScrollView, Dimensions, View } from 'react-native';
//Components
import Header from '../../component/Header';
// import Footer from '../../component/footer';
import ToggleMenu from '../../component/ToggleMenu';
import Background from '../../component/Background';
// import { events } from '../../localized/structures';
import str from '../../localized/strings';
// import TextInput from '../../component/textInput';
import validateForms from '../../hooks/validateForms';

import Sent from '../../component/modals/Sent';
import Alert from '../../component/modals/LarTemporario';

const { height } = Dimensions.get('screen');

function LarTemporario({navigation, route: { params }}) {
  const [listiner, setLister] = useState({});
  const [modal, setModal] = useState(false);
  const [alertModal, setAlertModal] = useState(true);
  const [sendForms, setSendForms] = useState(false);
  const scrollViewRef = useRef();

  useEffect(() => {
    const canSendIt = validateForms(listiner, 2);
    setSendForms(canSendIt)
  }, [listiner]);

  useFocusEffect(
    React.useCallback(() => {
      setAlertModal(true)
    }, [])
  );


  return (
    <>
      <Background img={'tree'} />
      
      <Alert show={alertModal} action={setAlertModal}/>
      <Sent 
        show={modal}
        action={setModal}
        nav={navigation}
        text={str.modal.evento}
      />
      {
        !alertModal && (
          <>
            <ToggleMenu />
            <ScrollView ref={scrollViewRef} extraScrollHeight={20} keyboardShouldPersistTaps="handled">
              <View style={styles.container}>
                <View>
                  <Header name={params.name} />
                    {/* { 
                      events.map((text) => (
                        <TextInput 
                          key={text.title} 
                          info={text}
                          action={setLister}
                          baseRef={scrollViewRef}
                        />)
                      )
                    } */}
                </View>
                {/* <Footer 
                  sendIt={sendForms} 
                  obj={listiner} 
                  modal={setModal}
                /> */}
              </View>
            </ScrollView>
          
          </>
        )
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height * 0.89,
    marginTop: 25,
    justifyContent: 'space-between'
  }
})

export default LarTemporario;