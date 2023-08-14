import React, {useRef} from 'react';
import {  StyleSheet, View, Image, TouchableOpacity, ScrollView } from 'react-native';
//Components
import Footer from '../../component/footer';
import Header from '../../component/header';
import Return from '../../component/return';
import TextInput from '../../component/resgate/TextInput';
import Background from '../../component/background';
import { Resgate as arrayText } from '../../localized/structures';
import images from '../../localized/images';

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
            <TouchableOpacity style={styles.media}>
              <Image style={styles.icon} source={images.camera} />
            </TouchableOpacity>
            <View>
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
  },
  media: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  icon: {
    width: 60,
    height: 60,
    marginRight: 40
  }
})

export default Resgate;
