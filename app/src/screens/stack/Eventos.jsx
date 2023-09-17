import React, {useRef, useState, useEffect} from 'react';
import { StyleSheet, ScrollView, Dimensions, View } from 'react-native';
//Components
import Footer from '../../component/footer';
import Header from '../../component/header';
import Return from '../../component/return';
import Background from '../../component/background';
import { events } from '../../localized/structures';
import str from '../../localized/strings';
import TextInput from '../../component/textInput';
import validateForms from '../../hooks/validateForms';

import Sent from '../../component/modals/Sent';

const { height } = Dimensions.get('screen');

function Eventos({navigation, route: { params }}) {
  const [listiner, setLister] = useState({});
  const [modal, setModal] = useState(false);
  const [sendForms, setSendForms] = useState(false);
  const scrollViewRef = useRef();

  useEffect(() => {
    const canSendIt = validateForms(listiner, 2);
    setSendForms(canSendIt)
  }, [listiner]);

  return (
    <>
      <Background img={'tree'} />
      <Sent 
        show={modal}
        action={setModal}
        nav={navigation}
        text={str.modal.evento}
      />
      <ScrollView ref={scrollViewRef} extraScrollHeight={20} keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <View>
            <Return nav={navigation} />
            <Header name={params.name} />
              { 
                events.map((text) => (
                  <TextInput 
                    key={text.title} 
                    info={text}
                    action={setLister}
                    baseRef={scrollViewRef}
                  />)
                )
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

export default Eventos;