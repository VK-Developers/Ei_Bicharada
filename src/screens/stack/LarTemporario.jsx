import React, {useRef, useState, useEffect} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, ScrollView, Dimensions, View, Text, SafeAreaView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
//Components
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import ToggleMenu from '../../component/ToggleMenu';
import Background from '../../component/Background';
import str from '../../localized/strings';
import TextInput from '../../component/input/Form';
import validateForms from '../../hooks/validateForms';

import { LarTemporario as structure } from '../../localized/structures';

import Sent from '../../component/modals/Sent';
import Alert from '../../component/modals/LarTemporario';

const { height } = Dimensions.get('screen');

function LarTemporario({navigation, route: { params }}) {
  const [selection, setSelection] = useState({
    animal: {1: null, 2: null, 3: null},
    tempo: {1: null, 2: null, 3: null},
  });
  const [listiner, setLister] = useState({});
  const [scrollY, setScrollY] = useState(0);
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

  const handleChange1 = (value, condition) => {
    setSelection(prev => ({...prev, animal: {...condition}}))

    setLister(prev => ({
      ...prev,
      animal: value
    }))
  };

  const handleChange2= (value, condition) => {
    setSelection(prev => ({...prev, tempo: {...condition}}))

    setLister(prev => ({
      ...prev,
      tempo: value
    }))
  };


  return (
    <>
      <Background img={'tree'} />
      <ToggleMenu level={scrollY} />
      <Alert show={alertModal} action={setAlertModal}/>
      <Sent 
        show={modal}
        action={setModal}
        nav={navigation}
        text={str.modal.larTemporario02}
      />
      {
        !alertModal && (
          <>
            <ScrollView scrollEventThrottle={null} onScroll={(event) => setScrollY(event.nativeEvent.contentOffset.y)} ref={scrollViewRef}>
              <SafeAreaView style={styles.container}>
                <View>
                  <Header name={params.name} />
                    { 
                      structure.map((text) => (
                        <TextInput 
                          key={text.title} 
                          info={text}
                          action={setLister}
                          baseRef={scrollViewRef}
                        />)
                      )
                    }

                    {/* Tipo de Animal */}
                    <View style={styles.checkBoxContainer}>
                      <Text style={styles.text}>Tipo de animal:</Text>
                      <View style={[styles.option, {width: "80%", alignSelf: 'center'}]}>
                        <CheckBox
                          value={selection.animal['1']}
                          onValueChange={() => handleChange1('Ave', {1: true, 2: false, 3: false})}
                          style={{marginRight: 2}}
                          tintColors={{ false: 'black' }}
                        />
                        <Text style={[styles.label, {marginRight: 10}]}>Ave</Text>
                        <CheckBox
                          value={selection.animal['2']}
                          onValueChange={() => handleChange1('Cão', {1: false, 2: true, 3: false})}
                          style={{marginRight: 2}}
                          tintColors={{ false: 'black' }}
                        />
                        <Text style={[styles.label, {marginRight: 10}]}>Cão</Text>
                        <CheckBox
                          value={selection.animal['3']}
                          onValueChange={() => handleChange1('Gato', {1: false, 2: false, 3: true})}
                          style={{marginRight: 2}}
                          tintColors={{ false: 'black' }}
                        />
                        <Text style={[styles.label, {marginRight: 10}]}>Gato</Text>
                      </View>
                    </View>

                    {/* Tempo */}
                    <View style={[styles.checkBoxContainer]}>
                      <Text style={styles.text}>Tempo disponível:</Text>
                      <View style={[styles.option, {width: "75%", alignSelf: 'center'}]}>
                        <CheckBox
                          value={selection.tempo['1']}
                          onValueChange={() => handleChange2('15 dias', {1: true, 2: false, 3: false})}
                          style={{marginRight: 2}}
                          tintColors={{ false: 'black' }}
                        />
                        <Text style={styles.label}>15 dias</Text>
                        <CheckBox
                          value={selection.tempo['2']}
                          onValueChange={() => handleChange2('30 dias', {1: false, 2: true, 3: false})}
                          style={{marginRight: 2}}
                          tintColors={{ false: 'black' }}
                        />
                        <Text style={styles.label}>30 dias</Text>
                      </View>
                    </View>

                    <View style={[styles.option, {justifyContent: 'center', padding: 0}]}>
                      <CheckBox
                            value={selection.tempo['3']}
                            onValueChange={() => handleChange2('Mais de 30 dias', {1: false, 2: false, 3: true})}
                            style={{marginRight: 2}}
                            tintColors={{ false: 'black' }}
                          />
                          <Text style={[styles.label, {marginRight: 10}]}>Mais de 30 dias</Text>
                    </View>



                </View>

                <Footer 
                  sendIt={sendForms} 
                  obj={{data: listiner, from: 'home'}}
                  modal={setModal}
                />
              </SafeAreaView>
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
  },
  checkBoxContainer: {
    padding: 10,

  },
  text: {
    fontSize: 24,
    color: 'black',
    fontWeight: '600',
    marginRight: 10,
  },
  option: {
    padding: 15,
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  label: {
    fontWeight: '500',
    color: 'black',
    fontSize: 22
  }
})

export default LarTemporario;