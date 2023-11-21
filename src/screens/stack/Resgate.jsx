import React, {useRef, useState, useEffect} from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView } from 'react-native';
//Components
import Footer from '../../component/Footer';
import Header from '../../component/Header';
import TextInput from '../../component/input/Form';
import CheckboxInput from '../../component/input/CheckBox';
import Background from '../../component/Background';
import { ResgateDenuncia as arrayText } from '../../localized/structures';
import str from '../../localized/strings';
import PictureIcon from '../../component/button/Picture';
import ListBtn from '../../component/button/SolicitationList';
import validateForms from '../../hooks/validateForms';

import ToggleMenu from '../../component/ToggleMenu';
import Sent from '../../component/modals/Sent';
import Solicitations from '../../component/modals/SolicitationList'

function Resgate({navigation, route: { params }}) {
  const [listModal, setListModal] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [listiner, setListiner] = useState({});
  const [modal, setModal] = useState(false);
  const [sendForms, setSendForms] = useState(false);
  const scrollViewRef = useRef();

  useEffect(() => {
    const canSendIt = validateForms(listiner, 1);
    setSendForms(canSendIt)
  }, [listiner]);

  return (
    <>
      <Background img={'tree'} />
      <ToggleMenu level={scrollY} />
      { !!listModal && <Solicitations show={listModal} action={setListModal} params={params} /> }
      <Sent
        show={modal}
        action={setModal}
        nav={navigation}
        reset={setListiner}
        text={str.modal.resgate}
      />
      <ScrollView scrollEventThrottle={null} style={{flex: 1}} onScroll={(event) => setScrollY(event.nativeEvent.contentOffset.y)} ref={scrollViewRef} keyboardShouldPersistTaps="handled">
        <SafeAreaView style={styles.container}>
          <View>
            <Header name={params.name} />
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <ListBtn state={{state: listModal, action: setListModal}}/>
              <PictureIcon action={setListiner} state={listiner} />
            </View>
              { 
                arrayText.map((text, i) => {
                  if (i === 1) return <CheckboxInput key={text.title} info={text} action={setListiner} />
                  return (
                    <TextInput 
                      key={text.title} 
                      info={text}
                      action={setListiner}
                      baseRef={scrollViewRef}
                    />
                  )
                })
              }
          </View>
        </SafeAreaView>
        <Footer 
          sendIt={sendForms} 
          obj={{data: listiner, from: 'rescue'}}
          modal={setModal}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    justifyContent: 'space-between',
  }
})

export default Resgate;
