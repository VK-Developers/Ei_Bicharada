import React, {useState, useEffect, useContext} from 'react';
import Context from '../../context/Context';
import { StyleSheet, SafeAreaView, Dimensions, View, FlatList, TouchableOpacity, Image } from 'react-native';
//Components
import Header from '../../component/Header';
import ToggleMenu from '../../component/ToggleMenu';
import Background from '../../component/Background';
import New from '../../component/flatlist/New';

import { listAllEvents } from '../../services/newAndEvent';

const {height, width} = Dimensions.get('window');

function NoticiasEventos({navigation, route: { params }}) {
  const { setLoader } = useContext(Context);
  const [news, setNews] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState({show: false, img: ''});
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setLoader(true)
    async function FetchData() {
      const fetchNews = await listAllEvents(params.token);
      setNews(fetchNews);
      setLoader(false);
    }
    FetchData();
  }, [])
  
  const eventPress = () => setSelectedEvent({show: false, img: ''})

  const renderComponente = ({item}) => <New eventCard={setSelectedEvent} nav={navigation} info={item} />

  return (
    <>
      <Background img={'four'} />
      <ToggleMenu level={scrollY} />
      {!!selectedEvent.show && (
          <TouchableOpacity style={styles.mask} onPress={eventPress}>
            <Image source={{ uri: selectedEvent.img}} style={styles.banner} resizeMode='contain' />
          </TouchableOpacity>
      )}
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
  },
  mask: {
    backgroundColor: "rgba(0, 0, 0, 0.70)",
    position: 'absolute',
    width,
    height,
    zIndex: 100,
  },
  banner: {
    flex: 1
  }
})

export default NoticiasEventos;