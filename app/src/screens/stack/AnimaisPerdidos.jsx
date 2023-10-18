import React, {useState, useEffect} from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
//Components
import Footer from '../../component/footer';
import Header from '../../component/header';
import ToggleMenu from '../../component/ToggleMenu';
import Background from '../../component/background'
import Animal from '../../component/flatlist/animal';
import NewAnimal from '../../component/NewAnimal';

import { getMissing } from '../../services/getRequest';

function AnimaisPerdidos({route: { params }}) {
  const [loader, setLoader] = useState(true);
  const [animals, setAnimals] = useState([]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    async function FetchData() {
      const data = await getMissing(params.token);
      setAnimals(data)
      setLoader(false)
    }
    FetchData();
  }, [])

  const renderComponente = ({ item }) => <Animal info={item} />

  return (
    <>
      <Background img={'tree'} />
      <ToggleMenu level={scrollY}/>
      <SafeAreaView style={styles.container}>
        <FlatList 
          data={animals}
          renderItem={renderComponente}
          keyExtractor={({id}) => 'lost-' + id}
          onScroll={(event) => setScrollY(event.nativeEvent.contentOffset.y)}
          ListHeaderComponent={() => (
            <>
              <Header name={params.name} />
              <NewAnimal type={'lost'} />
            </>
          )}
          ListFooterComponent={() => <Footer />}
        />
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
})

export default AnimaisPerdidos;