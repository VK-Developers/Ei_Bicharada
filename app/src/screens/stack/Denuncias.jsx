import React, {useRef, useState, useEffect} from 'react';
import { StyleSheet, View, ScrollView, Dimensions } from 'react-native';
// Components
import Footer from '../../component/footer';
import Header from '../../component/header';
import Return from '../../component/return';
import PictureIcon from '../../component/pictureIcon';
import CheckboxInput from '../../component/checkboxInput';
import TextInput from '../../component/textInput'
import Background from '../../component/background';
import { ResgateDenuncia as arrayText } from '../../localized/structures';
import validateForms from '../../hooks/validateForms';

const { height } = Dimensions.get('screen')

function Denuncias({navigation, route: { params }}) {
  const [listiner, setLister] = useState({});
  const [sendForms, setSendForms] = useState(false);
  const scrollViewRef = useRef();

  useEffect(() => {
    const canSendIt = validateForms(listiner, 1)
    canSendIt && setSendForms(true)
  }, [listiner]);

  return (
    <>
      <Background img={'tree'} />
      <ScrollView ref={scrollViewRef} extraScrollHeight={20} keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <View>
            <Return nav={navigation} />
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
          <Footer sendIt={sendForms} obj={listiner} />
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

export default Denuncias;