import React, { useEffect } from 'react';
import { StyleSheet, ScrollView, Image, TouchableOpacity, View, Text, Dimensions } from 'react-native';
//Components
import Background from '../../component/background';
import Return from '../../component/return';
import Footer from '../../component/footer';

import images from '../../localized/images';

import {getRescuedAnimals} from "../../services/getRequest";

const { width, height } = Dimensions.get('screen');

function Product({navigation, route: { params }}) {
    const { img, name } = params;

    useEffect(() => {
        async function asyncFunc() {
            const getAll = await getRescuedAnimals()
            console.log(getAll)
        }

        asyncFunc();
    }, [])
 
  return (
    <>
        <Background img={'tree'} />
        <ScrollView style={styles.container}>
            <View>
                <Return nav={navigation} />
                <Image source={img || images.backgrounds.one} style={styles.preview}/>
                <Text style={styles.price}>R$ 10,00</Text>

                <View style={styles.content}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.text}>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</Text>


                </View>
            </View>
            {/* <Footer /> */}
        </ScrollView>
  </>
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
    },
    preview: {
        backgroundColor: 'green',
        marginTop: 20,
        width,
        height: height * 0.3,
        objectFit: 'contain'
    },
    price: {
        color: 'black',
        alignSelf: 'flex-end',
        marginRight: 20,
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
        marginBottom: 20
    },
    text: {
        color: 'black',
        fontSize: 18,
        fontWeight: '500',
    }
})

export default Product;