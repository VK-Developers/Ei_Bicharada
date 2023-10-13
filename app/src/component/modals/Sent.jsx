import React from 'react';
import {Modal, StyleSheet, Text, Pressable, View} from 'react-native';

const Sent = ({ show, action, nav, text }) => {
    const handlePress = () => {
        action(!show);
        typeof nav !== 'boolean' && nav.navigate('NoticiasEventos')
    }
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={show}
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.text}>{text[0]}</Text>
                    <Pressable
                        style={styles.button}
                        onPress={handlePress}
                    >
                        <Text style={styles.btnText}>{text[1]}</Text>
                    </Pressable>
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
        margin: 20,
        backgroundColor: 'white',
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
    },
    text: {
        marginBottom: 25,
        color: 'black',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600'
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600'
    },
    button: {
        backgroundColor: '#2196F3',
        borderRadius: 15,
        width: 150,
        padding: 10,
        elevation: 2,
    },
});

export default Sent;