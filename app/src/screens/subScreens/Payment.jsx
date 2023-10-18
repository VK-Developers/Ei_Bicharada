import React from 'react';
import { StyleSheet, ScrollView, Image, TouchableOpacity, View, Text, Dimensions } from 'react-native';
//Components
import Background from '../../component/Background';
import Return from '../../component/button/Return';

const { width, height } = Dimensions.get('screen');

function Payment({navigation, route: { params }}) {

    return (
        <>
            <Background img={'tree'} />
            <ScrollView style={styles.container}>
                <View>
                    <Return nav={navigation} />
                    
                </View>
            </ScrollView>
        </>
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
    },
})

export default Payment;