import React, {useState, useContext} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import Context from '../../context/Context'
import { StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native';
import Animal from '../../component/flatlist/GenericAnimal';
import AdmAction from '../../component/modals/AdmAction';

import { acceptedAdoptions } from '../../services/adoption';

function TAdoption() {
  const { token, setLoader, loader } = useContext(Context);
  const [animals, setAnimals] = useState({approved: [], pendente: []});
  const [modal, setModal] = useState(false);
  const [kind, setKind] = useState('approved');
  const [selected, setSelected] = useState({});

  useFocusEffect(
    React.useCallback(() => {
      setLoader(true)
      FetchData();
    }, [])
  );

  const FetchData = async () => {
    const data = await acceptedAdoptions(token);
    const approved = data.filter(i => !i.new);
    const pendente = data.filter(i => i.new);

    setAnimals({approved, pendente})

    setKind('approved')
    setLoader(false)
  }

  const renderCard = ({item}) => <Animal action={{modal: setModal, choose: setSelected}} info={item} />;

  return (
    <>
      {!!modal && <AdmAction state={{list: animals[kind], action: setAnimals}} selected={selected} show={modal} action={setModal} />}
      <View style={styles.screen}>
        { !loader && (
          (animals.length !== 0 ? (
              <FlatList 
                data={animals[kind]}
                renderItem={renderCard}
                keyExtractor={({name}) => name}
                ListHeaderComponent={() => (
                  <View style={styles.header}>
                    <TouchableOpacity
                      onPress={() => setKind('approved')}
                      style={[styles.btn, kind === 'approved' && { backgroundColor: '#483d8b' }]}
                    >
                      <Text style={[styles.text, kind === 'approved' && { color: 'black' }]}>Aceitos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => setKind('pendente')}
                      style={[styles.btn, kind === 'pendente' && {backgroundColor: '#483d8b'}]}
                    >
                      <Text style={[styles.text, kind === 'pendente' && { color: 'black' }]}>Pendente</Text>
                      {animals['pendente'].length > 0 && <View style={styles.pendente} />}
                    </TouchableOpacity>
                  </View>
                )}
              />
            ) : (
              <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={{fontSize: 18, fontWeight: '600', textAlign: 'center'}}>NENHUMA ADOÇÃO</Text>
              </View>
            )
          )
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#36454F',
    flex: 1
  },
  header: {
    backgroundColor: 'rgb(07,25,51)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginBottom: 20
  },
  btn: {
    width: "50%",
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white'
  },
  pendente: {
    marginLeft: 5,
    width: 10,
    height: 10,
    backgroundColor: 'red',
    borderRadius: 100
  }
})

export default TAdoption;