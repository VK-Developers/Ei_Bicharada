import React, {useRef, useState, useEffect} from 'react';
import { StyleSheet, View, ScrollView, Dimensions } from 'react-native';
// Components
import Footer from '../../component/footer';
import Header from '../../component/header';
import Return from '../../component/return';
import PictureIcon from '../../component/pictureIcon'
import TextInput from '../../component/textInput'
import Background from '../../component/background';
import { ResgateDenuncia as arrayText } from '../../localized/structures';

const { height } = Dimensions.get('screen')

function Denuncias({navigation, route: { params }}) {
  const [listiner, setLister] = useState({})
  const scrollViewRef = useRef();

  useEffect(() => console.log(listiner), [listiner])

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
                arrayText.map((text) => (
                  <TextInput 
                    key={text.title} 
                    info={text} 
                    baseRef={scrollViewRef}
                  />)
                )
              }
          </View>
          <Footer />
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