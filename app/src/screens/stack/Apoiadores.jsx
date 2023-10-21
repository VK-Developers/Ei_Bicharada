import React, {useState, useEffect, useContext} from 'react';
import Context from '../../context/Context';
import { StyleSheet, View, SafeAreaView, FlatList, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
//Components
import Header from '../../component/Header';
import ToggleMenu from '../../component/ToggleMenu';
import Background from '../../component/Background';
import CardSponsor from '../../component/flatlist/Sponsor'

import { getSponsors } from '../../services/getRequest';

const {width, height} = Dimensions.get('screen');

function Apoiadores({navigation, route: { params }}) {
  const { setLoader } = useContext(Context);
  const [sponsors, setSponsors] = useState([]);
  const [selected, setSelected] = useState('');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setLoader(true)
    async function FetchData() {
      const fetchSponsors = await getSponsors(params.token);
      setSponsors(fetchSponsors);
      setLoader(false);
    }
    FetchData();
  }, [])

  const renderComponente = ({item}) => <CardSponsor action={setSelected} nav={navigation} info={item} />

  return (
    <>
    <Background img={'tree'} />
    { !!selected ? (
        <TouchableOpacity onPress={() => setSelected('')} style={styles.full}>
          <ImageBackground source={{uri: selected}} style={styles.img} />
        </TouchableOpacity>
      ) : (
        <>
          <ToggleMenu level={scrollY} />
          <SafeAreaView style={styles.container}>
            <View style={styles.news}>
              <FlatList 
                data={sponsors}
                renderItem={renderComponente}
                keyExtractor={({id}) => 'lost-' + id}
                onScroll={(event) => setScrollY(event.nativeEvent.contentOffset.y)}
                ItemSeparatorComponent={ <View style={{height: 20}} /> }
                ListHeaderComponent={() => <Header name={params.name} /> }
              />
            </View>
            </SafeAreaView>
        </>
      )
  
    }
    
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    height: '97%',
    justifyContent: 'space-between'
  },
  infoContainer: {
    marginTop: 70,
    marginBottom: 40
  },
  text: {
    color: 'black',
    fontWeight: '800',
    fontSize: 26,
    textAlign: 'center',
  },
  iconContainer: {
    alignSelf: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 20,
    icon: {
      width: 160,
      height: 150,
    }
  },
  full: {
    alignItems: 'center',
    width,
    height,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  img: {
    marginTop: 30,
    width: width * 0.85, 
    height: height * 0.85,
  }
})

export default Apoiadores;