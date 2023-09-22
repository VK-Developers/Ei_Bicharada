import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
//Components
import Footer from '../../component/footer';
import Header from '../../component/header';
import Return from '../../component/return';
import Background from '../../component/background'
import Animal from '../../component/flatlist/animal';

import ConfirmModal from '../../component/modals/Adocao'
// Most come from API
import {animalsAdocao} from '../../mock'

function Adocao({navigation, route: { params }}) {
  const [closeModal, setCloseModal] = useState(false);
  const renderComponente = ({ item }) => <Animal info={item} /> 

  return (
    <>
      <Background img={'tree'} />
      <ConfirmModal visible={closeModal} action={setCloseModal} />
      <SafeAreaView style={[styles.container, {opacity: !closeModal ? 0.5 : 1}]}>
        <FlatList 
          data={animalsAdocao}
          renderItem={renderComponente}
          keyExtractor={({id}) => 'adopt-' + id}
          ListHeaderComponent={() =>
            <>
              <Return nav={navigation} />
              <Header name={params.name} />
            </>
          }
          ListFooterComponent={() => <Footer />}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
})

export default Adocao;