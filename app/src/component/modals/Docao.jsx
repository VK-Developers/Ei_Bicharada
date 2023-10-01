import React from 'react';
import {Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import str from '../../localized/strings'

const Docao = ({show, action, option}) => {
    const handlePress = (param) => {
        option(param)
        action(!show);
    }
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={!show}
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.text}>{str.modal.adocao[0]}</Text>
                    <View style={styles.btnContainer}>
                        <Pressable
                            style={styles.button}
                            onPress={() => handlePress(false)}
                        >
                            <Text style={styles.btnText}>{str.modal.adocao[1]}</Text>
                        </Pressable>
                        <Pressable
                            style={styles.button}
                            onPress={() => handlePress(true)}
                        >
                            <Text style={styles.btnText}>{str.modal.adocao[2]}</Text>
                        </Pressable>
                    </View>
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
        backgroundColor: 'white',
        margin: 20,
        borderRadius: 20,
        padding: 30,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: '60%',
        width: '80%',
        justifyContent: 'space-around'
    },
    text: {
        marginBottom: 25,
        color: 'black',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600'
    },
    btnContainer: {
        width: '100%',
        height: '35%',
        justifyContent: 'space-between'
    },
    button: {
        backgroundColor: '#2196F3',
        borderRadius: 20,
        width: '100%',
        height: '40%',
        padding: 10,
        elevation: 2,
        justifyContent: 'center'
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600'
    },
});

export default Docao;