import React from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
//Components
import Footer from '../../component/footer';
import Header from '../../component/header';
import Return from '../../component/return';
import Background from '../../component/background'
import Animal from '../../component/flatlist/animal';

// Most come from API
import {animalsAdocao} from '../../mock'


function Adocao({navigation, route: { params }}) {
  const renderComponente = ({ item }) => <Animal info={item} /> 

  return (
    <>
      <Background img={'tree'} />
      <SafeAreaView style={styles.container}>
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