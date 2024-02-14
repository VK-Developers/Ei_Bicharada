import React, {useState} from 'react';
import {Modal, StyleSheet, Text, Pressable, View, TextInput} from 'react-native';
// import str from '../../localized/strings';

const Email = ({ show, action, data }) => {
    const [value, setValue] = useState(false);
    const [submit, setSubmit] = useState(false);

    const handlePress = () => {
        data(prev => ({...prev, email: value}))
        action(!show)
    };

    const handleChange = (param) => {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        setValue(param)
        setSubmit(emailRegex.test(param))
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={show}
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.text}>Email ja esta em uso, porfavor escolha outro...</Text>
                    <TextInput 
                        style={styles.input}
                        onChangeText={handleChange}
                    />
                    <Pressable disabled={!submit} style={[styles.button, submit && {backgroundColor: '#2196F3'}]} onPress={handlePress}>
                        <Text style={styles.btnText}>Alterar</Text>
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
        width: '80%',
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
        backgroundColor: 'gray',
        borderRadius: 15,
        width: 150,
        padding: 10,
        elevation: 2,
    },
    input: {
        textAlign: 'center',
        color: 'black',
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 40,
        borderBottomColor: 'gray',
        borderBottomWidth: 2,
        width: "95%"
    }
});

export default Email;