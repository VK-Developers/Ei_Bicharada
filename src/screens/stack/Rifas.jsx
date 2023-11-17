import React, {useState, useEffect, useContext} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import Context from '../../context/Context';
import { StyleSheet, SafeAreaView, View, FlatList, Text } from 'react-native';
//Components
import Header from '../../component/Header';
import ToggleMenu from '../../component/ToggleMenu';
import Background from '../../component/Background';
import Card from '../../component/flatlist/Rifa';

import str from '../../localized/strings';

import { rafflesList } from '../../services/raffles'

function Rifas({navigation, route: { params }}) {
  const { setLoader, token } = useContext(Context);
  const [scrollY, setScrollY] = useState(0);
  const [rifas, setRifas] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, [])
  );

  useEffect(() => setLoader(true), [])

  const fetchData = async () => {
    const data = await rafflesList(params.token);
    setRifas(data);
    setLoader(false);
  }

  const renderComponente = ({item}) => <Card nav={navigation} info={{...item, token}} />

  return (
    <>
      <Background img={'five'} />
      <ToggleMenu level={scrollY} />
      {rifas.length > 0 ? (
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
        ) : (
          <>
            <SafeAreaView style={styles.container}>
              <Header name={params.name} />
            </SafeAreaView>
            <View 
              style={{position: 'absolute', top: "40%", width: "100%"}}
            >
              <Text 
                style={{color: "black", fontSize: 18, fontWeight: "900", textAlign: 'center'}}
              >
                {str.rifaPlaceHolder}
              </Text>
            </View>
          </>
        )}
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
})

export default Rifas;