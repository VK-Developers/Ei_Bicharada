import React, {useContext, useEffect} from 'react';
import Context from '../../context/Context';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
//Components
import Background from '../../component/Background';
import Footer from '../../component/Footer';

// import EmergencialEmail from '../../hooks/EmergencialEmail';

function AbuseConfirme({navigation}) {
    const {token} = useContext(Context);

    useEffect(() => {

    }, [])

    const handleHelp = () => {
        // console.log(token);
        // EmergencialEmail();
    }

    return (
        <>
            <Background img={'six'} />
            <View style={styles.container}>
                <View style={styles.containerText}>
                    <Text style={styles.text}>Esperamos que esteja bem!</Text>
                    <Text style={styles.text}>Por gentileza nos confirme se realmente precisa de ajuda.</Text>
                    <Text style={styles.text}>Lembre-se você não esta sozinha 🩷🩷</Text>
                </View>
                <View style={styles.containerBtn}>
                    <TouchableOpacity onPress={handleHelp} style={[styles.btn, {backgroundColor: 'green'}]}>
                        <Text style={[styles.text, {color: 'white'}]}>Sim</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Cover')} style={[styles.btn, {backgroundColor: 'red'}]}>
                        <Text style={[styles.text, {color: 'white'}]}>Não</Text>
                    </TouchableOpacity>
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
    containerBtn: {
        flexDirection: 'row',
        marginTop: 40,
        width: '55%',

        justifyContent: 'space-between'
    },
    btn: {
        padding: 10,
        backgroundColor: 'white',
        width: "45%",
        borderRadius: 15,
    },
    footer: {
        position: 'absolute',
        bottom: 0
    }
})

export default AbuseConfirme;