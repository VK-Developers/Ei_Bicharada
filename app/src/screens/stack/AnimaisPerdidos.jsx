import React, { useState, useEffect, useContext } from 'react';
import Context from '../../context/Context';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
//Components
import Header from '../../component/Header';
import ToggleMenu from '../../component/ToggleMenu';
import Background from '../../component/Background'
import Animal from '../../component/flatlist/animal';
import NewAnimal from '../../component/button/NewAnimal';
import NewAnimalModal from '../../component/modals/NewAnimal'

import { getMissing } from '../../services/getRequest';

function AnimaisPerdidos({navigation, route: { params }}) {
  const { loader, setLoader } = useContext(Context);
  const [modal, setModal] = useState(false);
  const [animals, setAnimals] = useState([]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setLoader(true);
    async function FetchData() {
      const data = await getMissing(params.token);
      setAnimals(data);
      setLoader(false);
    }
    FetchData();
  }, [])

  const renderComponente = ({ item }) => <Animal info={item} nav={navigation} />

  return (
    <>
      <Background img={'tree'} />
      <ToggleMenu level={scrollY}/>
      { !!modal && <NewAnimalModal show={modal} action={setModal} type={'lost'} /> }
      {
        !loader ? (
          <SafeAreaView style={styles.container}>
            { animals.length !== 0 ? (
              <FlatList 
                data={animals}
                renderItem={renderComponente}
                keyExtractor={({id}) => 'lost-' + id}
                onScroll={(event) => setScrollY(event.nativeEvent.contentOffset.y)}
                ListHeaderComponent={() => (
                  <>
                    <Header name={params.name} />
                    <NewAnimal type={'lost'} action={setModal} />
                  </>
                )}
              />
            ) : (
              <>
                <Header name={params.name} />
                <NewAnimal type={'lost'} action={setModal} />
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
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
})

export default AnimaisPerdidos;