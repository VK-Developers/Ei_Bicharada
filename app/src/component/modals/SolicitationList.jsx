import React, {useContext, useState} from 'react';
import Context from '../../context/Context';
import { useFocusEffect } from '@react-navigation/native';
import {Modal, StyleSheet, TouchableOpacity, FlatList, View, Text, Image, ScrollView} from 'react-native';
import ListCard from '../flatlist/ListCard';
import { visibleRescues, archiveRescue } from '../../services/rescue';
import { visibleComplains, archiveComplain } from '../../services/complain';
import images from '../../localized/images';

const SolicitationList = ({ show, action, params: {name, token} }) => {
    const [list, setList] = useState([]);
    const [selected, setSelected] = useState(null);
    const {setLoader} = useContext(Context);

    useFocusEffect(
        React.useCallback(() => {
            setLoader(true)
            fetchData();
        }, [])
    );

    const fetchData = async () => {
        const keyFormat = name.normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase();

        const actions = {
            resgate: async () => await visibleRescues(token),
            denuncias: async () => await visibleComplains(token),
        }

        const data = await actions[keyFormat](); 

        setList(data);
        setLoader(false);
    }

    const handleClose = () => action(false);

    const handleUpdate = async () => {
        const id = selected.id
        const keyFormat = name.normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase();


        const actions = {
            resgate: async () => await archiveRescue(id, token),
            denuncias: async () => await archiveComplain(id, token),
        }

        setLoader(true);

        await actions[keyFormat]();

        setLoader(false);
        setSelected(null)
        action(false)
    }
    const renderComponente = ({item}) => <ListCard info={item} action={setSelected} />
    
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={show}
        >
            <TouchableOpacity onPress={handleClose} style={styles.mask} />
            {!selected ? (
                <View style={styles.container}>
                    <View style={styles.content}>
                    { list.length !== 0 ? (
                        <FlatList 
                            data={list}
                            renderItem={renderComponente}
                            keyExtractor={({id}) => 'list-' + id}
                            style={{width: '100%'}} 
                        />
                        ) : (
                            <Text style={styles.noContent}>{`Sem soliticação de ${name.toLowerCase()}`}</Text>
                        )}
                    </View>
                </View>
            ) : (
                <View style={styles.container}>
                    <View style={styles.content}>
                        <ScrollView style={{ width: "100%", height: "100%"}}>
                            <TouchableOpacity style={{padding: 10}} onPress={() => setSelected(null)}>
                                <Image source={images.arrow} style={{width: 45, height: 45}} />
                            </TouchableOpacity>
                            <Image source={selected.photo ? { uri: selected.photo } : images.backgrounds.one}  style={styles.preview} />
                            <Text style={styles.title}>{selected.animal} - {selected.hour} {selected.created}</Text>
                            <Text style={styles.text}>{selected.description}</Text>
                            <Text style={[styles.text, {textAlign: 'center', fontSize: 20, fontWeight: '700'}]}>{`${selected.walking ? 'Animal esta andando' : 'Animal não esta andando'}`}</Text>
                            <Text style={[styles.text, {textAlign: 'left', fontSize: 20, fontWeight: '700'}]}>Situação já resolvida ?</Text>

                            <TouchableOpacity
                                onPress={handleUpdate}
                                style={[styles.btn, { backgroundColor: 'green' }]}
                            >
                                <Text style={styles.btn.text}>sim</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={() => setSelected(null)}
                                style={[styles.btn, { backgroundColor: 'red' }]}
                            >
                                <Text style={styles.btn.text}>não</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>
            )}
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        overflow: 'hidden',
        width: '85%',
        height: '80%',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    mask: {
        position: 'absolute',
        width: "100%",
        height: "100%",
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
    },
    noContent: {
        color: 'black',
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        position: 'absolute',
        bottom: '60%'
    },
    preview: {
        width: '100%',
        height: 200,
        objectFit: 'cover'
    },
    title: {
        color: 'black',
        fontSize: 24,
        fontWeight: '700',
        marginTop: 30,
        textAlign: 'center'
    },
    text: {
        color: 'black',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'justify',
        padding: 15
    },
    btn: {
        width: "90%",
        alignSelf: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginBottom: 12,
        text: {
            color: 'black',
            fontSize: 22,
            fontWeight: '800',
        }
    }
});

export default SolicitationList;