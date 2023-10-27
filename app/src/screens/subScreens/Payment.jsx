import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity, View, Text, TextInput } from 'react-native';
//Components
import Background from '../../component/Background';
import Return from '../../component/button/Return';

import Modal from '../../component/modals/Payment';

function Payment({navigation, route: { params }}) {
    const [qtd, setQtd] = useState('1');
    const [modal, setModal] = useState(false);

    // console.log(params)

    return (
        <>
            <Background img={'tree'} />
            {!!modal && <Modal show={modal} action={setModal} />}
            <View style={styles.container}>
                <Return nav={navigation} />
                <View style={styles.content}>
                    <View style={styles.item}>
                        <Text style={styles.text}>{params.name}</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.text}>qtd.</Text>
                            <TextInput 
                                value={qtd}
                                onChangeText={setQtd} 
                                keyboardType='number-pad' 
                                style={styles.qtd}
                            />
                        </View>
                    </View>
                    <Text style={[styles.text, {alignSelf: 'flex-end', marginRight: 20}]}>{`Total: R$ ${(params.price * qtd).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</Text>
                </View>
                <TouchableOpacity
                    disabled={!(qtd > 0)}
                    style={[styles.btn, qtd <= 0 && { backgroundColor: 'gray' }]}
                    onPress={() => setModal(true)}
                >
                    <Text style={styles.btn.text}>Continuar</Text>
                </TouchableOpacity>
            </View>
        </>
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
    },
    content: {
        backgroundColor: '#FFFFF0',
        padding: 15,
        width: "93%",
        alignSelf: 'center',
        borderRadius: 15,
        marginTop: 20
    },
    text: {
        fontSize: 18,
        fontWeight: '500',
        color: 'black',
    },
    item: {
        padding: 5,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 100,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
    },
    qtd: {
        backgroundColor: 'black',
        borderRadius: 10,
        marginRight: 10,
        marginLeft: 10,
        width: 50,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600'
    },
    btn: {
        backgroundColor: 'green',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: "80%",
        alignSelf: 'center',
        marginTop: 100,
        text: {
            color: 'black',
            fontWeight: '600',
            fontSize: 20
        }
    }
})

export default Payment;