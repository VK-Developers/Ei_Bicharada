import React, {useContext, useEffect, useState} from 'react';
import Context from '../../context/Context';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
//Components
import Background from '../../component/Background';
import Footer from '../../component/Footer';
import { registreVictime, victimsList } from '../../services/victims';

// import EmergencialEmail from '../../hooks/EmergencialEmail';

function AbuseConfirme({navigation}) {
    const {token, login, setLoader, loader} = useContext(Context);
    const [isOnList, setIsOnList] = useState(false)

    useEffect(() => {
        setLoader(true)

        async function FetchData() {
            const fetchVictims = await victimsList(token);
            const check = fetchVictims.some(i => i.email === (login.email.toLowerCase()).trim());
            setIsOnList(check)

            setLoader(false)
        }
        FetchData();
    }, [])

    const handleHelp = async () => {
        await registreVictime(token);
        // EmergencialEmail();

        navigation.navigate('Cover');
    }

    return !loader ? (
        <>
            <Background img={'six'} />
            <View style={styles.container}>
                {!isOnList ? (
                    <>
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
                    </>
                ) : (
                    <>
                        <View style={styles.containerText}>
                            <Text style={styles.text}>Sua solicitação ja está com nossa equipe</Text>
                            <Text style={styles.text}>Fique calma, a Polícia Militar já está a caminho.</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Cover')}
                            style={[styles.btn, { backgroundColor: '#FF00FF', marginTop: 30 }]}
                        >
                            <Text style={[styles.text, {color: 'white'}]}>Confirmar</Text>
                        </TouchableOpacity>
                    </>
                )}
            </View>
            <View style={styles.footer}>
                <Footer />
            </View>
        </>
    ) : (
        <>
            <Background img={'six'} />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerText: {
        padding: 10
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