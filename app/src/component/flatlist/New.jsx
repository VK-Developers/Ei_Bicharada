import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

function New({nav, info}) {
    const {content, title, date, type} = info;

    const handlePress = () => {
        nav.navigate('Article', {content, title, date})
    }

    const kindOfCard = {
        noticia: () => (
            <TouchableOpacity onPress={handlePress} style={[styles.container, { backgroundColor: "#CCCCFF" }]}>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{title}</Text>
                    <Text
                        numberOfLines={3}
                        ellipsizeMode="tail"
                        style={styles.content}
                    >
                        {content}
                    </Text>
                <Text style={styles.data}>{date}</Text>
            </TouchableOpacity>
        ),
        release: () => (
            <View style={[styles.container, { backgroundColor: "#E4D00A" }]}>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{title}</Text>
                <Text style={styles.title}>😍😍😍😍😍</Text>
                    <Text style={styles.content}>
                        {content}
                    </Text>
                <Text style={styles.data}>{date}</Text>
            </View>
        ),
    }

    const renderFunction = () => {
        const render = kindOfCard[type];
        return render()
    }

    return renderFunction()
}

const styles = StyleSheet.create({
    container: {
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
        fontSize: 14,
        fontWeight: "700",
        alignSelf: 'flex-end'

    }
})


export default New;