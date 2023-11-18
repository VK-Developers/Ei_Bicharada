import {useEffect, useState} from 'react';
import { StyleSheet, TouchableOpacity, Text, View, ImageBackground } from 'react-native';

import str from '../../localized/strings';

function New({nav, info, eventCard}) {
    const [imgPixel, setImgPixel] = useState(0)
    const {content, title, date, type} = info;

    useEffect(() => {
        const splitObj = type.split('+')
        !splitObj[1] ? setImgPixel(250) : setImgPixel(Number(splitObj[1]))
    }, [])

    const newPress = () => {
        nav.navigate('Article', {content, title, date,  picture: str.https + info.picture, heightPixel: imgPixel})
    }

    const eventPress = () => {
        eventCard({
            show: true,
            img: str.https + info.picture
        })
    }


    const kindOfCard = {
        new: () => (
            <TouchableOpacity onPress={newPress} style={[styles.container, { backgroundColor: "#CCCCFF" }]}>
                <ImageBackground source={{ uri: str.https + info.picture }} style={styles.background} resizeMode="cover">
                    <View style={{backgroundColor: "rgba(0, 0, 0, 0.70)", height: 120, padding: 15, justifyContent: 'space-between'}}>
                        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{title}</Text>
                        <Text style={styles.data}>{date}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        ),
        event: () => (
            <TouchableOpacity onPress={eventPress} style={styles.container}>
                <ImageBackground 
                    source={{ uri: str.https + info.picture }} 
                    style={[styles.background, { height: 250 }]} 
                    resizeMode="cover"
                />
            </TouchableOpacity>
        ),
    }

    const renderFunction = () => {
        const t = type.split('+')
        const render = kindOfCard[t[0]];
        return render()
    }

    return renderFunction()
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        // padding: 10,
        position: 'relative',
        overflow: 'hidden',
        
    },
    title: {
        alignSelf: 'center',
        fontWeight: '600',
        fontSize: 20
    },
    content: {
        alignSelf: 'stretch',
        // color: 'black',
        fontWeight: '600',
        fontSize: 16,
        padding: 10,
        
    },
    data: {
        // color: 'black',
        fontSize: 14,
        fontWeight: "700",
        alignSelf: 'flex-end'

    },
    background: {
        flex: 1,
    },
})


export default New;