import React, {useState, useContext} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import Context from '../../context/Context'
import { StyleSheet, View, FlatList, Text } from 'react-native';
import Card from '../../component/flatlist/Generic';
import { visibleRescues } from '../../services/rescue';

function TRescue() {
  const { token, setLoader, loader } = useContext(Context);
  const [rescues, setRescues] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      setLoader(true)
      FetchData();
    }, [])
  );

  const FetchData = async () => {
    const data = await visibleRescues(token)
    setRescues(data)
    setLoader(false)
  }


  const renderCard = ({item}) => <Card info={item} /> 

  return (
    <View style={styles.screen}>
      { !loader && (
        (rescues.length !== 0 ? (
            <FlatList 
              data={rescues}
              renderItem={renderCard}
              keyExtractor={({animal}, i) => `${animal}-i`}
              style={{paddingTop: 20}}
            />
          ) : (
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={{fontSize: 18, fontWeight: '600', textAlign: 'center'}}>NENHUM RESGATE SOLICITADO</Text>
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

export default TRescue;