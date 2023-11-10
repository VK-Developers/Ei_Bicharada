import React, {useContext} from 'react';
import Context from '../../context/Context';
import { StyleSheet, TouchableOpacity, Text, Image, View, Alert } from 'react-native';
import { removeVictim as remove } from '../../services/victims';
import images from '../../localized/images'

function AlertCard({info, token, list, action}) {
    const {setLoader} = useContext(Context)
    const { id, name, email, phone, created } = info;

    const handleDelete = async () => {
        setLoader(true)
        const newList = list.filter(i => i.name !== name);
        await remove(id, token);
        action(newList)
        setLoader(false)
    }

    const handleInfo = () => {
        const data = new Date(created);

        const day = data.getDate().toString().padStart(2, '0');
        const month = (data.getMonth() + 1).toString().padStart(2, '0');
        const year = data.getFullYear().toString().substr(-2);

        const alarmeData = `${day}/${month}/${year}`;

        Alert.alert(
            null, 
            `${name}\n\n${email}\n\n${phone}\n\n\nSolicitado dia ${alarmeData}`
        );
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.name}>
                <Text style={styles.text}>{name}</Text>
            </View>
            <View style={styles.actions}>
                <TouchableOpacity onPress={handleInfo}>
                    <Image source={images.info} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleDelete}>
                    <Image source={images.bin} style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'black',
        padding: 20,
        width: "95%",
        alignSelf: 'center',
        borderRadius: 15,
        marginBottom: 20
    },
    name: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    text: {
        color: '#E9DCC9',
        fontSize: 18,
        marginLeft: 20
    },
    actions: {
        flexDirection: 'row',
        width: '25%',
        justifyContent: 'space-between',
        marginRight: 20
    },
    icon: {
        tintColor: '#E9DCC9',
        width: 20,
        height: 20,
    }
})

export default AlertCard;
