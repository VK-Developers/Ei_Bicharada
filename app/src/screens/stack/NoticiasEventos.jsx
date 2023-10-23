import React, {useState, useEffect, useContext} from 'react';
import Context from '../../context/Context';
import { StyleSheet, SafeAreaView, Dimensions, View, FlatList } from 'react-native';
//Components
import Header from '../../component/Header';
import ToggleMenu from '../../component/ToggleMenu';
import Background from '../../component/Background';
import New from '../../component/flatlist/New';

import { getNewAndEvent } from '../../services/getRequest';

const {height, width} = Dimensions.get('window');

function NoticiasEventos({navigation, route: { params }}) {
  const { setLoader } = useContext(Context);
  const [news, setNews] = useState([]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setLoader(true)
    async function FetchData() {
      const fetchNews = await getNewAndEvent(params.token);
      setNews(fetchNews);
      setLoader(false);
    }
    FetchData();
  }, [])

  const renderComponente = ({item}) => <New nav={navigation} info={item} />

  return (
    <>
      <Background img={'four'} />
      <ToggleMenu level={scrollY} />
      <SafeAreaView style={styles.container}>
          <View style={styles.news}>
            <FlatList 
              data={news}
              renderItem={renderComponente}
              keyExtractor={({id}) => 'lost-' + id}
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
    flex: 1,
    marginTop: 25,
  },
  news: {
    alignSelf: 'center',
    width: width * 0.85,
    flexGrow: 1,
  },
  background: {
    position: 'absolute',
    height,
    width,
    opacity: 0.08,
    zIndex: -1,
  },
  backgroundSolid: {
    height,
    width,
    backgroundColor: '#0047AB'
  }
})

export default NoticiasEventos;