import React, { useState, useEffect, useContext } from 'react';
import Context from '../../context/Context';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
//Components
import Footer from '../../component/Footer';
import Header from '../../component/Header';
import NewAnimal from '../../component/button/NewAnimal';
import Background from '../../component/Background'
import Animal from '../../component/flatlist/animal';
import ToggleMenu from '../../component/ToggleMenu';
import Loader from '../../component/Loader';
import NewAnimalModal from '../../component/modals/NewAnimal'

import { getAdoptions } from '../../services/getRequest';

function Adocao({navigation, route: { params }}) {
  const { loader, setLoader } = useContext(Context);
  const [modal, setModal] = useState(false);
  const [animals, setAnimals] = useState([]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setLoader(true)
    async function FetchData() {
      const fetchAnimals = await getAdoptions(params.token);
      setAnimals(fetchAnimals);
      setLoader(false);
    }
    FetchData();
  }, [])

  const renderComponente = ({ item }) => <Animal info={item} nav={navigation} /> 

  return (
    <>
      <Background img={'tree'} />
      <ToggleMenu level={scrollY} />
      { !!modal && <NewAnimalModal show={modal} action={setModal} type={'adoption'} /> }
      {
        !loader ? (
          <SafeAreaView style={styles.container}>
            <FlatList 
              data={animals}
              renderItem={renderComponente}
              keyExtractor={({id}) => 'adopt-' + id}
              onScroll={(event) => setScrollY(event.nativeEvent.contentOffset.y)}
              ListHeaderComponent={() => (
                <>
                  <Header name={params.name} />
                  <NewAnimal type={'adoption'} action={setModal}/>
                </>
              )}
              ListFooterComponent={() => <Footer />}
            />
          </SafeAreaView>
        ) : (
          <>
            <Background img={'tree'} />
            <Loader />
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