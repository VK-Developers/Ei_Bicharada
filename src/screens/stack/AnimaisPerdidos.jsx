import React, { useState, useContext } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import Context from '../../context/Context';
import { StyleSheet, SafeAreaView, FlatList, Platform } from 'react-native';
//Components
import Header from '../../component/Header';
import ToggleMenu from '../../component/ToggleMenu';
import Background from '../../component/Background'
import Animal from '../../component/flatlist/animal';
import NewAnimal from '../../component/button/NewAnimal';
import NewAnimalModal from '../../component/modals/NewAnimal'

import { acceptedMissing } from '../../services/missingAnimals';

function AnimaisPerdidos({navigation, route: { params }}) {
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
    const data = await acceptedMissing(params.token);
    setAnimals(data);
    setLoader(false);
  }

  const renderComponente = ({ item }) => <Animal info={item} nav={navigation} />

  return (
    <>
      <Background img={'tree'} tint={"#B87333"} />
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
            <Background img={'tree'} tint={"#B87333"} />
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