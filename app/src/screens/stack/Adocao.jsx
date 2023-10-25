import React, { useState, useContext } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import Context from '../../context/Context';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
//Components
import Header from '../../component/Header';
import NewAnimal from '../../component/button/NewAnimal';
import Background from '../../component/Background'
import Animal from '../../component/flatlist/animal';
import ToggleMenu from '../../component/ToggleMenu';
import NewAnimalModal from '../../component/modals/NewAnimal'

import { acceptedAdoptions } from '../../services/adoption';

function Adocao({navigation, route: { params }}) {
  const { loader, setLoader } = useContext(Context);
  const [modal, setModal] = useState(false);
  const [animals, setAnimals] = useState([]);
  const [scrollY, setScrollY] = useState(0);

  useFocusEffect(
    React.useCallback(() => {
      setLoader(true)
      fetchData();
    }, [])
  );

  const fetchData = async () => {
    const data = await acceptedAdoptions(params.token);
    setAnimals(data);
    setLoader(false);
  }

  const renderComponente = ({ item }) => <Animal info={item} nav={navigation} />

  return (
    <>
      <Background img={'tree'} />
      <ToggleMenu level={scrollY} />
      { !!modal && <NewAnimalModal show={modal} action={setModal} type={'adoption'} /> }
      {
        !loader ? (
          <SafeAreaView style={styles.container}>
            { animals.length !== 0 ? (
              <FlatList 
                data={animals}
                renderItem={renderComponente}
                keyExtractor={({id}) => 'adopt-' + id}
                onScroll={(event) => {
                  const yPosition = event.nativeEvent.contentOffset.y
                  setScrollY(yPosition)
                }}
                ListHeaderComponent={() => (
                  <>
                    <Header name={params.name} />
                    <NewAnimal type={'adoption'} action={setModal} />
                  </>
                )}
              />
            ) : (
              <>
                <Header name={params.name} />
                <NewAnimal type={'adoption'} action={setModal} />
                <Animal />
              </>
            )}
          </SafeAreaView>
        ) : (
          <>
            <Background img={'tree'} />
          </>
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