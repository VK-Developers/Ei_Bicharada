import React, {useState, useContext} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import Context from '../../context/Context'
import { StyleSheet, View, FlatList, Text } from 'react-native';
import Card from '../../component/flatlist/Generic';
import { visibleComplains } from '../../services/complain';

function TComplain() {
  const { token, setLoader, loader } = useContext(Context);
  const [complains, setComplains] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      setLoader(true)
      FetchData();
    }, [])
  );

  const FetchData = async () => {
    const data = await visibleComplains(token)
    setComplains(data)
    setLoader(false)
  }


  const renderCard = ({item}) => <Card info={item} /> 

  return (
    <View style={styles.screen}>
      { !loader && (
        (complains.length !== 0 ? (
            <FlatList 
              data={complains}
              renderItem={renderCard}
              keyExtractor={({animal}, i) => `${animal}-i`}
              style={{paddingTop: 20}}
            />
          ) : (
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={{fontSize: 18, fontWeight: '600', textAlign: 'center'}}>NENHUM DENUNCIA</Text>
            </View>
          )
        )
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#36454F',
    flex: 1
  }
})

export default TComplain;