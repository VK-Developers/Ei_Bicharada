import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {Modal, StyleSheet, TouchableOpacity, View, Text} from 'react-native';


const Payment = ({ show, action, info }) => {
    const { navigate } = useNavigation();

    const handlePress = () => {
        action(false)
        navigate('Cover')
    }
    
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={show}
        >
            <TouchableOpacity onPress={() => action(false)} style={styles.mask} />
                <View style={styles.container}>
                    <View style={styles.content}>
                        <Text style={[styles.text, {marginBottom: 30, marginTop: 30}]}>{info.pix === '' ? 'Pix Não Informado' : `Pix: ${info.pix}`}</Text>
                        <View style={{backgroundColor: '#B2BEB5', flexGrow: 1, width: "95%", borderRadius: 15, padding: 20, alignItems: 'center'}}>
                            <Text style={[styles.text, {textAlign: 'center', fontSize: 18}]}>Ficamos muito felizes com sua preferência</Text>
                            <Text style={[styles.text, {fontSize: 16, marginTop: 30}]}>{`${info.qtd} unidade(s) ${info.name}`}</Text>
                            <Text style={[styles.text, {fontSize: 16, marginTop: 30}]}>{`Total da com R$ ${info.total}`}</Text>
                        </View>
                        <View style={{backgroundColor: 'green', width: "90%", padding: 15, borderRadius: 20, marginBottom: 15, marginTop: 35}}>
                            <Text style={[styles.text, {color: 'white', marginBottom: 10}]}>Envio de Comprovante</Text>
                            <Text style={[styles.text, {color: 'white', fontStyle: 'italic', textAlign: 'center'}]}>{info.contact === '' ? 'Contato Não Informado' : info.contact}</Text>
                        </View>
                        <TouchableOpacity style={{backgroundColor: 'blue', width: '80%', padding: 10, borderRadius: 20, marginTop: 20, marginBottom: 20}} onPress={handlePress}>
                            <Text style={[styles.text, {color: 'white', textAlign: 'center'}]}>Retornar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        overflow: 'hidden',
        width: '85%',
        height: '70%',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 5,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        justifyContent: 'space-between'
    },
    mask: {
        position: 'absolute',
        width: "100%",
        height: "100%",
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
    },
    text: {
        fontSize: 18,
        fontWeight: '500',
        color: 'black',
    },
});

export default Payment;