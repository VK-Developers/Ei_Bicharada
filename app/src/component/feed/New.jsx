import React from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';

const { height } = Dimensions.get('screen');

function New({info}) {
    const {content, title, data} = info

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.content}>{content}</Text>
            <Text style={styles.data}>{data}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: height / 5,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        position: 'relative'
    },
    title: {
        alignSelf: 'center',
        color: 'black',
        fontWeight: '600',
        fontSize: 20
    },
    content: {
        alignSelf: 'stretch',
        color: 'black',
        fontWeight: '600',
        fontSize: 16,
        padding: 10,
    },
    data: {
        color: 'black',
        position: 'absolute',
        fontSize: 12,
        bottom: 15,
        right: 15
    }
})


export default New;