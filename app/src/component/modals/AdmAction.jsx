import React from 'react';
import {Modal, StyleSheet, TouchableOpacity, FlatList, View, Text, Image, ScrollView} from 'react-native';

const AdmAction = ({ show, action, params: {name, token} }) => {

    return !loader && (
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

export default AdmAction;