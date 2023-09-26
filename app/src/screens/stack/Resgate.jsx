import React, {useRef, useState, useEffect} from 'react';
import { StyleSheet, View, ScrollView, Dimensions } from 'react-native';
//Components
import Footer from '../../component/footer';
import Header from '../../component/header';
import TextInput from '../../component/textInput';
import CheckboxInput from '../../component/checkboxInput';
import Background from '../../component/background';
import { ResgateDenuncia as arrayText } from '../../localized/structures';
import str from '../../localized/strings';
import PictureIcon from '../../component/pictureIcon';
import validateForms from '../../hooks/validateForms';

import Sent from '../../component/modals/Sent';
import ToggleMenu from '../../component/ToggleMenu';

const { height } = Dimensions.get('screen');

function Resgate({navigation, route: { params }}) {
  const [scrollY, setScrollY] = useState(0);
  const [listiner, setLister] = useState({});
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
      <Sent 
        show={modal}
        action={setModal}
        nav={navigation}
        text={str.modal.resgate}
      />
      <ScrollView onScroll={(event) => setScrollY(event.nativeEvent.contentOffset.y)} ref={scrollViewRef} extraScrollHeight={20} keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <View>
            <Header name={params.name} />
            <PictureIcon action={setLister} state={listiner} />
              { 
                arrayText.map((text, i) => {
                  if (i === 1) return <CheckboxInput key={text.title} info={text} action={setLister} />
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
          <Footer 
            sendIt={sendForms} 
            obj={listiner} 
            modal={setModal}
          />
        </View>
      </ScrollView>
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

export default Resgate;
