import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
//Components
import Background from '../../component/Background';
import Footer from '../../component/Footer';

function AbuseConfirme({navigation}) {

    return (
        <>
            <Background img={'tree'} />
            <View style={styles.container}>
                <View style={styles.containerText}>
                    <Text style={styles.text}>Esperamos que estaja bem!</Text>
                    <Text style={styles.text}>Por gentileza nos confime que realmente precisa de ajuda</Text>
                    <Text style={styles.text}>Lembre-se você não esta sozinha</Text>
                </View>
            
            </View>
            <View style={styles.footer}>
                <Footer />
            </View>
        </>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerText: {

    },
    text: {
        color: 'black',
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center'
    },
    footer: {
        position: 'absolute',
        bottom: 0
    }
})

export default AbuseConfirme;