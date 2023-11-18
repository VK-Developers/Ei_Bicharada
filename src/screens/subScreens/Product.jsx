import React from 'react';
import { StyleSheet, ScrollView, Image, TouchableOpacity, View, Text, Dimensions } from 'react-native';
//Components
import Background from '../../component/Background';
import Return from '../../component/button/Return';

const { width, height } = Dimensions.get('screen');

function Product({navigation, route: { params }}) {
    const { description, inStock, name, picture, price } = params;

    const btn = () => {
        const background = { backgroundColor: inStock ? 'green' : 'red' };
        const text = inStock ? 'Comprar' : 'Indisponível';

        const handlePress = () => navigation.navigate('Payment', {...params})

        return (
            <TouchableOpacity 
                disabled={!inStock} 
                style={[styles.buy, background]}
                onPress={handlePress}
            >
                <Text style={styles.buy.text}>{text}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <>
            <Background img={'tree'} />
            <ScrollView style={styles.container}>
                <View>
                    <Return nav={navigation} />
                    <Image source={{uri: picture}} style={styles.preview}/>
                    <Text style={styles.price}>R$ {price.toFixed(2)}</Text>

                    <View style={styles.content}>
                        <Text style={styles.title}>{name}</Text>
                        <Text style={styles.text}>{description}</Text>
                    </View>
                </View>
                { btn() }
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
    },
    buy: {
        width: width - 30,
        alignSelf: 'center',
        height: height * 0.07,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,

        position: 'relative',
        bottom: 0,
        text: {
            color: 'black',
            fontSize: 26,
            fontWeight: '800',
        }
    }
})

export default Product;