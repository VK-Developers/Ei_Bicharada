import React, {useState, useEffect, useContext} from 'react';
import Context from '../../context/Context';
import {Modal, StyleSheet, Text, Pressable, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import Input from '../input/NewAnimal';
import validateForms from '../../hooks/validateForms';
import images from '../../localized/images';
import openCamera from '../../hooks/camera';

import str from '../../localized/strings';
import { newAnimal as structure } from '../../localized/structures';
import { postNewAnimal } from '../../services/postRequest';

const NewAnimal = ({ show, action, type }) => {
    const { token } = useContext(Context);
    const [sent, setSent] = useState(false);
    const [canSubmit, setCanSubmit] = useState(false);
    const [listiner, setListiner] = useState({});

    useEffect(() => {
        const checkIt = validateForms(listiner, 4)
        setCanSubmit(checkIt);
    }, [listiner]);

    const handleClose =  () => action(false);

    const handleSubmit = async () => {
        await postNewAnimal(listiner, type, token);
        setSent(true);
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={show}
            onRequestClose={handleClose}
        >
            <TouchableOpacity onPress={handleClose} style={styles.mask} />
            <View  style={styles.container}>
                <View style={styles.content}>
                    {!sent ? (
                        <ScrollView style={{width: "100%"}}>
                            {
                                structure.map((element, i) => (
                                    <Input
                                        key={"newAnimal-" + i}
                                        title={element.title} 
                                        placeholder={element.placeholder}
                                        type={element.type}
                                        data={{obj: listiner, action: setListiner}}
                                    />
                                ))
                            }
                            <View style={styles.pictureContainer}>
                                <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => {
                                    const run = openCamera(setListiner, 'folder')
                                    run();
                                }}>
                                    <Image style={styles.logo} source={images.folder} />
                                    {!!listiner.picture && listiner.picture[1] === 'folder' && <Image style={styles.checked} source={images.checked} /> }
                                </TouchableOpacity>
                                {
                                    type === "adoption" && (
                                        <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => {
                                            const run = openCamera(setListiner, 'camera')
                                            run();
                                        }}>
                                            <Image style={styles.logo} source={images.camera} />
                                            {!!listiner.picture && listiner.picture[1] === 'camera' && <Image style={styles.checked} source={images.checked} /> }
                                        </TouchableOpacity>
                                    )
                                }
                            </View>
                            <Pressable 
                                style={[styles.button, !canSubmit && {backgroundColor: 'gray'}]}
                                onPress={handleSubmit}
                                disabled={!canSubmit}
                            >
                                <Text style={styles.btnText}>{str.sendForm}</Text>
                            </Pressable>
                        </ScrollView>
                    ) : (
                        <View style={{
                            width: "100%",
                            height: "85%",
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={styles.text}>{str.sendFormSucess}</Text>
                            <Pressable style={[styles.button, {width: "50%"}]} onPress={handleClose}>
                                <Text style={styles.btnText}>{str.ok}</Text>
                            </Pressable>
                        </View>
                    )}
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mask: {
        position: 'absolute',
        width: "100%",
        height: "100%"
    },
    content: {
        width: '90%',
        height: '85%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 25,
        alignItems: 'flex-start',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    text: {
        marginBottom: 25,
        color: 'black',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600'
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600'
    },
    button: {
        backgroundColor: '#2196F3',
        borderRadius: 15,
        width: "100%",
        padding: 10,
        elevation: 2,
        marginTop: 25,
    },
    pictureContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    logo: {
        width: 80,
        height: 80
    },
    checked: {
        width: 30,
        height: 30
    }
});

export default NewAnimal;