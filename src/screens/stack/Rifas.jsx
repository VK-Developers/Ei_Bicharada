import React, {useState, useEffect, useContext} from 'react';
import Context from '../../context/Context';
import { StyleSheet, SafeAreaView, View, FlatList } from 'react-native';
//Components
import Header from '../../component/Header';
import ToggleMenu from '../../component/ToggleMenu';
import Background from '../../component/Background';
import Card from '../../component/flatlist/Rifa';

import {Rifas as mock} from '../../mock';

function Rifas({navigation, route: { params }}) {
  const { setLoader } = useContext(Context);
  const [scrollY, setScrollY] = useState(0);
  const [rifas, setRifas] = useState([]);

  useEffect(() => {
    setLoader(true)
    async function FetchData() {
      // const fetchData = await toDefine(params.token);

      setRifas(mock);
      setLoader(false);
    }
    FetchData();
  }, [])

  const renderComponente = ({item}) => <Card nav={navigation} info={item} />

  return (
    <>
      <Background img={'five'} />
      <ToggleMenu level={scrollY} />
      <SafeAreaView style={styles.container}>

        <View>
          <FlatList 
            data={rifas}
            renderItem={renderComponente}
            keyExtractor={({id}) => 'rifa-' + id}
            onScroll={(event) => setScrollY(event.nativeEvent.contentOffset.y)}
            ItemSeparatorComponent={ <View style={{height: 20}} /> }
            ListHeaderComponent={() => <Header name={params.name} /> }
          />
        </View>

      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
})

export default Rifas;