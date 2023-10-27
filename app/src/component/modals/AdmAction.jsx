import React, {useContext} from 'react';
import Context from '../../context/Context';
import {Modal, StyleSheet, TouchableOpacity, View, Text, ScrollView} from 'react-native';

const AdmAction = ({ show, action, selected }) => {
    const { loader } = useContext(Context);

    const handleClose = () => action(false);

    const handleRemove = async () => {console.log('removel')}

    const handleAdd = async () => {console.log('adicionou')}

    const condition = !!selected.name ? !selected.new : selected.new 

    return !loader && (
        <Modal
            animationType="fade"
            transparent={true}
            visible={show}
        >
            <TouchableOpacity onPress={handleClose} style={styles.mask} />
                <View style={styles.container}>
                    <View style={styles.content}>
                        {condition ? (
                            <>
                                <ScrollView style={{width: '100%',flex: 1, padding: 20}}>
                                    <View style={styles.contentContainer}>
                                        <Text style={styles.text}>{selected.description}</Text>
                                    </View>
                                </ScrollView>
                                <TouchableOpacity style={[styles.btn, {width: '100%'}]} onPress={handleRemove}>
                                    <Text style={styles.btn.text}>{!!selected.name ? 'Remover' : 'Arquivar'}</Text>
                                </TouchableOpacity>
                            </>
                        ) : (
                            <>
                                <ScrollView style={{width: '100%',flex: 1, padding: 20}}>
                                    <View style={styles.contentContainer}>
                                        <Text style={styles.text}>{selected.description}</Text>
                                    </View>
                                </ScrollView>
                                <View style={{flexDirection: 'row'}}>
                                    <TouchableOpacity style={[styles.btn, {backgroundColor: 'green'}]} onPress={handleAdd}>
                                        <Text style={styles.btn.text}>{!!selected.name ? 'Aceitar' : 'Reativar'}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.btn} onPress={handleRemove}>
                                        <Text style={styles.btn.text}>{!!selected.name ? 'Recusar' : 'Deletar'}</Text>
                                    </TouchableOpacity>
                                </View>
                            </>
                        )}
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
        height: '40%',
        margin: 20,
        backgroundColor: 'gray',
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    mask: {
        position: 'absolute',
        width: "100%",
        height: "100%",
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
    },

    contentContainer: {
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        fontWeight: '600'
    },
    btn: {
        position: 'relative',
        top: 0,
        backgroundColor: '#D2042D',
        width: "50%",
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        text: {
            fontSize: 22,
            fontWeight: '800',
            textAlign: 'center'
        }
    }
});

export default AdmAction;