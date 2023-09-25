import React, {useState, useContext, useEffect} from 'react';
import Context from '../../context/Context';
import { StyleSheet, SafeAreaView, Dimensions, View, FlatList } from 'react-native';
//Components
import Header from '../../component/header';
import ToggleMenu from '../../component/ToggleMenu';
import Background from '../../component/background';
import New from '../../component/feed/New';

import { news } from '../../localized/structures';

const {height, width} = Dimensions.get('window');

function NoticiasEventos({navigation, route: { params }}) {
  const {setMenu} = useContext(Context)
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    params.first && setMenu(true)
  })

  const renderComponente = ({item}) => <New info={item} />

  return (
    <>
      <Background img={'four'} />
      {scrollY <= 25 && <ToggleMenu first={params.first} />}
      <SafeAreaView style={styles.container}>
        {!params.first && (
          <View style={styles.news}>
            <FlatList 
              data={news}
              renderItem={renderComponente}
              keyExtractor={({id}) => 'lost-' + id}
              onScroll={(event) => setScrollY(event.nativeEvent.contentOffset.y)}
              ItemSeparatorComponent={ <View style={{height: 20}} /> }
              ListHeaderComponent={() => <Header name={!!params.name ? params.name : 'NOTICIAS | EVENTOS'} /> }
              ListFooterComponent={() => <View style={{height: 20}} />}
            />
          </View>
        )}

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
})

export default NoticiasEventos;