import React, { useEffect } from 'react';
import { StyleSheet, KeyboardAvoidingView, View, TouchableOpacity, Dimensions, ImageBackground, Image, Text, ScrollView } from 'react-native';
import images from '../localized/images';
import InputText from '../component/login/TextInput';
import Buttom from '../component/login/Buttom';

import strings from '../localized/strings';
import Footer from '../component/footer';

const { height, width } = Dimensions.get('window');

import { getUsers } from '../services/getRequest';

function Login() {
  return (
    <>
      <ImageBackground source={images.backgrounds.five} resizeMode="cover" style={styles.background} />
      <KeyboardAvoidingView style={styles.page}>
        <ScrollView keyboardShouldPersistTaps="always">
          <View>
            <View style={styles.titleContainer}>
              <Image source={images.logo} style={styles.logo} />
              <Text style={styles.title}>{strings.appTitle}</Text>
            </View>
            <View style={styles.login}>
              <InputText type={'email'} title={strings.login[0]} placeholder={strings.login[1]}/>
              <InputText type={'password'} title={strings.password[0]} placeholder={strings.password[1]}/>
            </View>
            <View style={styles.submit}>
              <Buttom type={'login'} title={strings.signIn}/>
              <TouchableOpacity style={{margin: 10}}>
                <Text style={styles.resetPassword}>{strings.passwordForgot}</Text>
              </TouchableOpacity>
              <Buttom type={'newUser'} title={strings.signUp}/>
            </View>
          </View>
          <Footer exeption={true} />
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  titleContainer: {
    marginTop: Platform.OS === 'ios'? 40 : width < 715 ? 15 : 30,
    marginBottom: Platform.OS === 'ios'? 30 : 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    alignSelf: 'center',
    width: 120,
    height: 120,
  },
  title: {
    color: 'black',
    fontWeight: '900',
    fontSize: 20,
    marginLeft: 20,
  },
  login: {
    width: width - 95,
    alignSelf: 'center'
  },
  submit: {
    width: width - 120,
    alignSelf: 'center',
    marginBottom: 25
  },
  resetPassword: {
    color: 'black',
    alignSelf: 'flex-end',
    fontSize: 16,
    fontWeight: '600'
  },
  background: {
    position: 'absolute',
    height,
    width,
    opacity: 0.05,
    zIndex: -1,
  },
})

export default Login;