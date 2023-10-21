import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
//Components
import Background from '../../component/Background';
import Return from '../../component/button/Return';

function Article({
    navigation,
    route: { 
        params: {
            title,
            content,
            date
        }
    }
}){

    console.log(date)

    return (
        <>
            <Background img={'tree'} />
            <ScrollView style={styles.container}>
                <Return nav={navigation} />
                <View style={styles.content}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.date}>{date}</Text>
                    <Text style={styles.text}>{content}</Text>


                </View>
            </ScrollView>
        </>
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
    },
    content: {
        padding: 20
    },
    title: {
        color: 'black',
        textAlign: 'center',
        fontSize: 22,
        fontWeight: "600",
        marginBottom: 10,
        marginTop: 10,
    },
    date: {
        color: 'black',
        textAlign: 'right',
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 20,
    },
    text: {
        color: 'black',
        textAlign: 'justify',
        fontSize: 20
    }
})

export default Article;