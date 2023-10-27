import React, {useState, useContext} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import Context from '../../context/Context'
import { StyleSheet, View, FlatList, Text } from 'react-native';
import Animal from '../../component/flatlist/GenericAnimal';
import { acceptedAdoptions } from '../../services/adoption';

function TAdoption() {
  const { token, setLoader, loader } = useContext(Context);
  const [animals, setAnimals] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      setLoader(true)
      FetchData();
    }, [])
  );

  const FetchData = async () => {
    const data = await acceptedAdoptions(token)
    setAnimals(data)
    setLoader(false)
  }


  const renderCard = ({item}) => <Animal info={item} /> 

  return (
    <View style={styles.screen}>
      { !loader && (
        (animals.length !== 0 ? (
            <FlatList 
              data={animals}
              renderItem={renderCard}
              keyExtractor={({name}) => name}
              style={{paddingTop: 20}}
            />
          ) : (
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={{fontSize: 18, fontWeight: '600', textAlign: 'center'}}>NENHUMA ADOÇÃO</Text>
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

export default TAdoption;