import {useContext} from 'react';
import Context from '../../context/Context';
import Clipboard from '@react-native-clipboard/clipboard';
import { useNavigation } from '@react-navigation/native';
import {Modal, StyleSheet, TouchableOpacity, View, Text, Linking, Alert} from 'react-native';

import { raffleInfo } from '../../services/raffles'

import str from '../../localized/strings';

const Rifa = ({ show, action, info: {number, raffle} }) => {
    const { token } = useContext(Context)
    const { navigate } = useNavigation();

    const handlePress = () => {
        action(false)
        navigate('Cover')
    }

    const PressWPP = async () => {
        const {entrance, name} = await raffleInfo(raffle, token)
        const phoneNumber = '+5513991648700';

        const message = str.rifaWpp(name, number, entrance)

        // Formatar a mensagem para a URL
        const encodedMessage = encodeURIComponent(message);

        const whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;

        Linking.canOpenURL(whatsappUrl)
            .then((supported) => {
                if (supported) {
                    return Linking.openURL(whatsappUrl);
                } else {
                    alert('O WhatsApp não está instalado neste dispositivo.');
                }
            })
            .catch((err) => console.error('Um erro ocorreu ao tentar abrir o WhatsApp: ', err));
    }

    const PressPix = () => {
        Clipboard.setString(str.pixKey);
        Alert.alert(null, str.donateAlert);
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
                        <Text style={[styles.text, {marginBottom: 30, marginTop: 30}]}>Agradecemos o seu interesse!</Text>
                        <View style={{backgroundColor: '#F9F6EE', flexGrow: 1, width: "95%", borderRadius: 15, padding: 20, alignItems: 'center'}}>
                            <Text style={[styles.text, {fontSize: 16, marginTop: 30}]}>1º Passo: Copiar o Pix Clicando no botão abaixo</Text>
                            <TouchableOpacity style={[styles.btn, {backgroundColor: '#F3E5AB', marginBottom: 30}]} onPress={PressPix}>
                                <Text style={[styles.text, {fontSize: 16, textAlign: 'center'}]}>Copiar Pix</Text>
                            </TouchableOpacity>
                            <Text style={[styles.text, {fontSize: 16}]}>2º Passo: Enviar o Comprovante de Pagamento para o seguinte número</Text>
                            <TouchableOpacity style={[styles.btn, {backgroundColor: '#AFE1AF', marginBottom: 5}]} onPress={PressWPP}>
                                <Text style={[styles.text, {fontSize: 16, textAlign: 'center'}]}>Enviar Comprovante</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={{backgroundColor: 'blue', width: '80%', padding: 5, borderRadius: 20, marginTop: 20, marginBottom: 20}} onPress={handlePress}>
                            <Text style={[styles.text, {color: 'white', textAlign: 'center', fontSize: 18}]}>Fechar</Text>
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
        fontSize: 20,
        fontWeight: '500',
        color: 'black',
    },
    btn: {
        width: '80%',
        padding: 10,
        borderRadius: 20,
        marginTop: 15
    }
});

export default Rifa;