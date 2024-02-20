import { StyleSheet, View, Text } from 'react-native';
import Background from '../../component/Background';

function Block() {
  return (
    <>
      <Background img={'five'} tint={'#F3A253'} />
      <View style={styles.container}>
        <View style={styles.note}>
          <Text style={styles.text}>Acesso ao App Bloqueado</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  note: {
    backgroundColor: 'rgb(37, 43, 55)',
    width: "75%",
    height: 200,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    width: "100%",
    textAlign: "center",
    fontSize: 16
  }
})

export default Block;