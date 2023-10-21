import React, {useRef, useState, useEffect, useContext} from 'react';
import Context from '../../context/Context';
import { StyleSheet, View, ScrollView, Dimensions } from 'react-native';
// Components
import Footer from '../../component/Footer';
import Header from '../../component/Header';
import ToggleMenu from '../../component/ToggleMenu';
import PictureIcon from '../../component/button/Picture';
import CheckboxInput from '../../component/input/CheckBox';
import TextInput from '../../component/input/Form'
import Background from '../../component/Background';
import { ResgateDenuncia as arrayText } from '../../localized/structures';
import str from '../../localized/strings';
import validateForms from '../../hooks/validateForms';

import Sent from '../../component/modals/Sent';

const { height } = Dimensions.get('screen')

function Denuncias({navigation, route: { params }}) {
  const [scrollY, setScrollY] = useState(0);
  const {menu} = useContext(Context);
  const [listiner, setListiner] = useState({});
  const [modal, setModal] = useState(false);
  const [sendForms, setSendForms] = useState(false);
  const scrollViewRef = useRef();

  useEffect(() => {
    const canSendIt = validateForms(listiner, 1)
    canSendIt && setSendForms(true)
  }, [listiner]);

  return (
    <>
      <Background img={'tree'} />
       <ToggleMenu level={scrollY} />
      <Sent
        show={modal}
        action={setModal}
        nav={navigation}
        reset={setListiner}
        text={str.modal.denuncia}
      />
      <ScrollView onScroll={(event) => setScrollY(event.nativeEvent.contentOffset.y)} ref={scrollViewRef} extraScrollHeight={20} keyboardShouldPersistTaps="handled">
        <View style={[styles.container, {opacity: menu ? 0.25 : 1}]}>
          <View>
            <Header name={params.name} />
            <PictureIcon action={setListiner} state={listiner} />
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
          <Footer 
            sendIt={sendForms} 
            obj={{data: listiner, from: 'complains'}}
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
    justifyContent: 'space-between',
  }
})

export default Denuncias;