import {useState, useEffect} from 'react';
import { StyleSheet, ScrollView, Image, TouchableOpacity, View, Text, Dimensions } from 'react-native';
//Components
import Background from '../../component/Background';
import Return from '../../component/button/Return';

const { width, height } = Dimensions.get('screen');

function Rifa({navigation, route: { params }}) {
    const [modal, setModal] = useState(false)
    const { name, picture, price, qtd } = params;
    console.log(params)

    const handleClick = () => {
        console.log('click')
        setModal(true)
    }

    return (
        <>
            <Background img={'tree'} />
            <ScrollView style={styles.container}>
                <Return nav={navigation} />
                <Image source={{uri: picture}} style={styles.preview}/>
                <Text style={[styles.text, styles.price]}>{`R$ ${price}`}</Text>
                
                <View style={styles.status}>
                    <Text style={{fontWeight: '800', fontSize: 17, color: '#50C878'}}>Disponivel</Text>
                    <Text style={{fontWeight: '800', fontSize: 17, color: '#6082B6'}}>Em Análise</Text>
                    <Text style={{fontWeight: '800', fontSize: 17, color: '#C41E3A'}}>Indisponivel</Text>
                </View>

                <Text style={[styles.text, styles.select]}>Selecione um número:</Text>
                <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                    {
                        [...Array.from({length: qtd})].map((_a, i) => {
                            const num = i + 1;
                            // let css;
                            let css = styles['available']
                            let click = true;

                            // if (data.status === 'checking') {
                            //     css = styles['checking'];
                            //     click = false;
                            // } else if (data.status === 'unavailable') {
                            //     css = styles['unavalible'];
                            //     click = false;
                            // } else {
                            //     css = styles['available']
                            // }

                            return (
                                <TouchableOpacity
                                    key={`${name}-${num}`}
                                    style={[styles.ball, css]}
                                    disabled={!click}
                                    onPress={handleClick}
                                >
                                    <Text style={[styles.text, css.text]}>{num}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
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
        width,
        height: height * 0.3,
        objectFit: 'cover'
    },
    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: '700',
    },
    price: {
        alignSelf: 'flex-end',
        marginRight: 20,
        marginTop: 15,
    },
    select: {
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 10,
    },
    status: {
        backgroundColor: '#FFFFF0',
        padding: 10,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 10,
        marginBottom: 5
    },
    ball: {
        width: 55,
        height: 55,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    available: {
        backgroundColor: '#50C878',
        text: {
            color: 'white'
        }
    },
    checking: {
        backgroundColor: '#6082B6',
        text: {
            color: 'white'
        }
    },
    unavalible: {
        backgroundColor: '#C41E3A',
        text: {
            color: 'white'
        }
    }
})

export default Rifa;