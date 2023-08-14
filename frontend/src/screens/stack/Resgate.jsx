import React, {useRef} from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
//Components
import Footer from '../../component/footer';
import Header from '../../component/header';
import Return from '../../component/return';
import TextInput from '../../component/textInput';
import Background from '../../component/background';
import { ResgateDenuncia as arrayText } from '../../localized/structures';
import PictureIcon from '../../component/pictureIcon';

function Resgate({navigation, route: { params }}) {
  const scrollViewRef = useRef();

  return (
    <>
      <Background img={'tree'} />
      <ScrollView ref={scrollViewRef} extraScrollHeight={20} keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <View>
            <Return nav={navigation} />
            <Header name={params.name} />
            <PictureIcon />
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
    height: '96%',
    marginTop: 25,
    justifyContent: 'space-between'
  }
})

export default Resgate;
