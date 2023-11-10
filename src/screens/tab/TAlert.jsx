import React, {useState, useContext} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import Context from '../../context/Context'
import { StyleSheet, View, FlatList, Text } from 'react-native';

import Alert from '../../component/flatlist/Alert';
import { victimsList } from '../../services/victims';

function TAlert() {
  const { token, setLoader, loader } = useContext(Context);
  const [victims, setVictms] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      setLoader(true)
      FetchData();
    }, [])
  );

  const FetchData = async () => {
    const data = await victimsList(token)
    setVictms(data)
    setLoader(false)
  }

  const renderCard = ({item}) => <Alert action={setVictms} list={victims} info={item} token={token} /> 
  
  return (
    <View style={styles.screen}>
      { !loader && (
        (victims.length !== 0 ? (
            <FlatList 
              data={victims}
              renderItem={renderCard}
              keyExtractor={({name}) => name}
              style={{paddingTop: 20}}
            />
          ) : (
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={{fontSize: 18, fontWeight: '600', textAlign: 'center'}}>NENHUMA DENUNCIA</Text>
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

export default TAlert;