import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
//Components
import Footer from '../../component/footer';
import Header from '../../component/header';
import Background from '../../component/background'
import Animal from '../../component/flatlist/animal';

import ToggleMenu from '../../component/ToggleMenu';
// Most come from API
import {animalsAdocao} from '../../mock'

function Adocao({route: { params }}) {
  const [scrollY, setScrollY] = useState(0);
  
  const renderComponente = ({ item }) => <Animal info={item} /> 

  return (
    <>
      <Background img={'tree'} />
       <ToggleMenu level={scrollY} />
      <SafeAreaView style={styles.container}>
        <FlatList 
          data={animalsAdocao}
          renderItem={renderComponente}
          keyExtractor={({id}) => 'adopt-' + id}
          onScroll={(event) => setScrollY(event.nativeEvent.contentOffset.y)}
          ListHeaderComponent={() => <Header name={params.name} />}
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