import React, {useState, useContext} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import Context from '../../context/Context'
import { StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native';
import Card from '../../component/flatlist/Generic';
import AdmAction from '../../component/modals/AdmAction';

import { visibleRescues } from '../../services/rescue';

function TRescue() {
  const { token, setLoader, loader } = useContext(Context);
  const [rescues, setRescues] = useState({approved: [], pendente: []});
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
    const data = await visibleRescues(token);
    const approved = data.filter(i => i.new);
    const pendente = data.filter(i => !i.new);

    setRescues({approved, pendente});

    setKind('approved');
    setLoader(false);
  }


  const renderCard = ({item}) => <Card action={{modal: setModal, choose: setSelected}} info={item} /> 

  return (
    <>
      {!!modal && <AdmAction selected={selected} show={modal} action={setModal} />}
      <View style={styles.screen}>
        { !loader && (
          (rescues.length !== 0 ? (
              <FlatList 
                data={rescues[kind]}
                renderItem={renderCard}
                keyExtractor={({animal}, i) => `${animal}-i`}
                ListHeaderComponent={() => (
                  <View style={styles.header}>
                    <TouchableOpacity
                      onPress={() => setKind('approved')}
                      style={[styles.btn, kind === 'approved' && { backgroundColor: '#483d8b' }]}
                    >
                      <Text style={[styles.text, kind === 'approved' && { color: 'black' }]}>Chamados</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => setKind('pendente')}
                      style={[styles.btn, kind === 'pendente' && {backgroundColor: '#483d8b'}]}
                    >
                      <Text style={[styles.text, kind === 'pendente' && { color: 'black' }]}>Concluidos</Text>
                    </TouchableOpacity>
                  </View>
                )}
              />
            ) : (
              <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={{fontSize: 18, fontWeight: '600', textAlign: 'center'}}>NENHUM RESGATE SOLICITADO</Text>
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
    justifyContent: 'center',
    alignContent: 'center'
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white'
  }
})

export default TRescue;