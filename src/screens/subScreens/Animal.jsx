import {useContext} from 'react';
import Context from '../../context/Context';
import { StyleSheet, ScrollView, Image, View, Text, Dimensions } from 'react-native';
//Components
import Background from '../../component/Background';
import Return from '../../component/button/Return';

const { width, height } = Dimensions.get('screen');

function Animal({navigation, route: {params}}) {
    const {infos} = useContext(Context);
    const {name, description, picture, server} = params;

    return (
        <>
            <Background img={'tree'} />
            <ScrollView style={styles.container}>
                <View>
                    <Return nav={navigation} />
                    <Image source={{uri: server + picture}} style={styles.preview}/>
                    <View style={styles.content}>
                        <Text style={styles.title}>{name}</Text>
                        <Text style={styles.text}>{description}</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <Text style={[styles.title, {fontSize: 21, fontStyle: 'italic'}]}>Entre em contato com a gente</Text>
                    <Text style={[styles.title, {fontSize: 20}]}>{infos.adocao.tel01}</Text>
                    <Text style={[styles.title, {fontSize: 20}]}>{infos.adocao.tel02}</Text>
                    <Text style={[styles.title, {fontSize: 18}]}>{infos.adocao.email}</Text>
                </View>
            </ScrollView>
        </>
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
    },
    preview: {
        marginTop: 20,
        backgroundColor: 'white',
        width,
        height: height * 0.3,
        objectFit: 'contain'
    },
    price: {
        color: 'black',
        alignSelf: 'flex-end',
        marginRight: 20,
        marginTop: 15,
        fontSize: 22,
        fontWeight: '600',
    },
    content: {
        padding: 30,
    },
    title: {
        color: 'black',
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 20,
        textAlign: 'center'
    },
    text: {
        color: 'black',
        fontSize: 18,
        fontWeight: '500',
    }
})

export default Animal;