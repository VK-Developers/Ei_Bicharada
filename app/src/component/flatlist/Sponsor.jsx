import React from 'react';
import { StyleSheet, TouchableOpacity, Text, ImageBackground, View } from 'react-native';

function Sponsor({ info, action, https }) {
    const { name, picture } = info;

    const handlePress = () => {
        const flier = picture.replace('card', 'flier')
        action(flier);
    }
    return (
        <TouchableOpacity onPress={handlePress} style={styles.container}>
            <ImageBackground source={{ uri: https + picture }} style={styles.background} resizeMode="cover">
                <View style={styles.content}>
                    <Text style={styles.title}>{name}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        height: 150,
        width: "90%",
        borderRadius: 20,
        overflow: 'hidden',
    },
    content: {
        backgroundColor: "rgba(0, 0, 0, 0.40)",
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end' 
    },
    title: {
        color: 'white',
        fontWeight: '600',
        fontSize: 22,
        marginBottom: 20,
        marginRight: 20,
    },
    background: {
        flex: 1,
    },
})

export default Sponsor;
