import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, SafeAreaView, FlatList, View, Text } from 'react-native';
//Components
import Footer from '../../component/footer';
import Header from '../../component/header';
import Background from '../../component/background'
import Animal from '../../component/flatlist/animal';
import ToggleMenu from '../../component/ToggleMenu';
import Docao from '../../component/modals/Docao';
import str from '../../localized/strings'

import { getAdoptions } from '../../services/getRequest';

function Adocao({route: { params }}) {
  const [animals, setAnimals] = useState([]);
  const [modal, setModal] = useState(false);
  const [option, setOption] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    async function FetchData() {
      const fetchAnimals = await getAdoptions();
      setAnimals(fetchAnimals)
    }
    FetchData();
  }, [])

  useFocusEffect(
    React.useCallback(() => {
      setModal(false)
    }, [])
  );

  const renderComponente = ({ item }) => <Animal info={item} /> 

  return (
    <>
      <Docao show={modal} action={setModal} option={setOption}/>
      <Background img={'tree'} />
      {
        !!modal && ( !option ? (
            <>
              <ToggleMenu level={scrollY} />
              <SafeAreaView style={styles.container}>
                <FlatList 
                  data={animals}
                  renderItem={renderComponente}
                  keyExtractor={({id}) => 'adopt-' + id}
                  onScroll={(event) => setScrollY(event.nativeEvent.contentOffset.y)}
                  ListHeaderComponent={() => <Header name={params.name} />}
                  ListFooterComponent={() => <Footer />}
                />
              </SafeAreaView>
            </>
          ) : (
            <>
              <ToggleMenu level={scrollY} />
              <SafeAreaView style={[styles.container, styles.doacao]}>
                
                <View style={{flexGrow: 1}}>
                  <View>
                    <Header name={str.doacao.title} />
                  </View>
                  <View style={{flexGrow: 1}}>
                    <View style={styles.infoContainer}>
                      <Text style={styles.text}>{str.doacao.retirada[0]}</Text>
                      <Text style={styles.text}>{str.doacao.retirada[1]}</Text>
                    </View>

                    <View style={styles.bar} />

                    <View style={styles.infoContainer}>
                      <Text style={styles.text}>{str.doacao.coleta[0]}</Text>
                      <Text style={styles.text}>{str.doacao.coleta[1]}</Text>
                    </View>

                    <View style={styles.bar} />

                    <View style={styles.infoContainer}>
                      <Text style={styles.text}>{str.doacao[0]}</Text>
                      <Text style={styles.text}>{str.doacao[1]}</Text>
                    </View>
                  </View>
                </View>
                <Footer />
              </SafeAreaView>
            </>
          )
        )
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
  doacao: {
    // marginTop: 25,
    height: '97%',
    justifyContent: 'space-between'
  },
  infoContainer: {
    padding: 40,
  },
  text: {
    color: 'black',
    fontWeight: '800',
    fontSize: 28,
    textAlign: 'center',
  },
  bar: {
    width: 130,
    height: 5,
    alignSelf: 'center',
    backgroundColor: 'black',
    borderRadius: 20,
  }
})

export default Adocao;