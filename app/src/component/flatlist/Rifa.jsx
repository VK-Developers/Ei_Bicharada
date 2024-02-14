import React from 'react';
import { StyleSheet, TouchableOpacity, Text, ImageBackground, View } from 'react-native';
import str from '../../localized/strings'

function Rifa({ info, nav }) {
    const { name, entrance, productPicture } = info;

    const price = entrance.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    const picture = str.https + productPicture

    const handlePress = () => nav.navigate('Rifa', {...info, picture, price})

    return (
        <TouchableOpacity onPress={handlePress} style={styles.container}>
            <ImageBackground source={{ uri: picture }} style={styles.background} resizeMode="cover">
                <View style={styles.content}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={[styles.title, {textAlign: 'right'}]}>{`R$ ${price}`}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        height: 200,
        width: "95%",
        borderRadius: 20,
        overflow: 'hidden',
    },
    content: {
        backgroundColor: "rgba(0, 0, 0, 0.70)",
        flex: 1,
        padding: 25,
        justifyContent: 'space-between',
    },
    title: {
        color: 'white',
        fontWeight: '600',
        fontSize: 20,
    },
    background: {
        flex: 1,
    },
})

export default Rifa;
