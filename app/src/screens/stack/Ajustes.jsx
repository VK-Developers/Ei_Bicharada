import { useContext, useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, Text, ScrollView, View, TextInput, Image } from 'react-native';
import Context from '../../context/Context';

import Background from "../../component/Background";

import Return from '../../component/button/Return';

import { getAll, update as updateUser } from '../../services/user';
import { update as updatePassword, deleteAccount } from '../../services/logIn';

import images from '../../localized/images';

function Ajustes({navigation, route: { params }}) {
  const [selected, setSelected] = useState('');
  const [basic, setBasic] = useState({name: '', phone: '', city: '', cep: ''});
  const [password, setPassword] = useState({value: 'value', confirm: 'confirm'});
  const [confirmEmail, setConfirmEmail] = useState('');
  const [user, setUser] = useState({});
  const { setLogin, setToken, token, login: { email } } = useContext(Context);

  useEffect(() => {
    async function Jobs() {
      const allUsers = await getAll(token);
      const userTarget = allUsers.filter((user) =>  user.email === email);
      setUser(userTarget[0]);
    } 
    Jobs();
  }, [])

  const handleAction = {
    select: (name, type) => {
      if (name === selected) {
        if (type === "password") setPassword({value: 'value', confirm: 'confirm'})
        setSelected('')
        return
      }
      setSelected(name)
    },
    logout: () => {
      setToken('');
      setLogin({email: '', password: '', status: true});
      navigation.navigate('Login')
    }
  }

  const inputSection = {
    info: (
      <View style={styles.inputSection}>
        <View style={{padding: 5, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20}}>
          <Text>Nome</Text>
          <TextInput
            value={basic.name}
            style={styles.infoInput}
            placeholder={user.name}
            onChangeText={(i) => setBasic(p => ({...p, name: i}))}
          />
        </View>
        <View style={{padding: 5, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20}}>
          <Text>Telefone</Text>
          <TextInput
            value={basic.phone}
            keyboardType='numeric'
            style={styles.infoInput}
            placeholder={user.phone}
            onChangeText={(i) => setBasic(p => ({...p, phone: i}))}
          />
        </View>
        <View style={{padding: 5, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20}}>
          <Text>Cidade</Text>
          <TextInput
            value={basic.city}
            style={styles.infoInput}
            placeholder={user.city}
            onChangeText={(i) => setBasic(p => ({...p, city: i}))}
          />
        </View>
        <View style={{padding: 5, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20}}>
          <Text>CEP</Text>
          <TextInput
            value={basic.cep}
            keyboardType='numeric'
            style={styles.infoInput}
            placeholder={user.cep}
            onChangeText={(i) => setBasic(p => ({...p, cep: i}))}
          />
        </View>
        <TouchableOpacity style={styles.submitBtn} onPress={() => updateUser(user.id, basic, token)}>
          <Text style={{textAlign: 'center'}}>Salvar</Text>
        </TouchableOpacity>
      </View>
    ),
    password: (
      <View style={styles.inputSection}>

        <View style={{padding: 5, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20}}>
          <Text>Nova Senha</Text>
          <TextInput
            style={styles.infoInput}
            onChangeText={(i) => setPassword(p => ({...p, value: i}))}
          />
        </View>

        <View style={{padding: 5, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20}}>
          <Text>Confirmar</Text>
          <TextInput
            style={styles.infoInput}
            onChangeText={(i) => setPassword(p => ({...p, confirm: i}))}
          />
        </View>

        <TouchableOpacity
          disabled={password.value !== password.confirm} 
          style={[
            styles.submitBtn, 
            {
              backgroundColor: !(password.value.length > 5 && password.value == password.confirm) ? "gray" : "green"
            }
          ]}
          onPress={() => updatePassword(password.confirm, user.id, token)}
        >
          <Text style={{textAlign: 'center'}}>Salvar</Text>
        </TouchableOpacity>
      </View>
    ),
    delete: (
      <View style={styles.inputSection}>
        <View style={{padding: 5, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20}}>
          <Text>Confirmar Email</Text>
          <TextInput
            value={confirmEmail}
            style={[styles.infoInput, {width: "65%"}]}
            onChangeText={(i) => setConfirmEmail(i)}
          />
        </View>
        <TouchableOpacity
          disabled={!confirmEmail === user.email} 
          style={[
            styles.submitBtn, 
            {
              backgroundColor: confirmEmail !== user.email ? "gray" : "green",
              alignSelf: 'center'
            }
          ]}
          onPress={() => {
              deleteAccount(user.id, token);
              handleAction.logout()
            }
          }
        >
          <Text style={{textAlign: 'center'}}>Excluir</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const menuBtn = (name, action, type) => {
    return (
      <View style={styles.menuBtn} >
        <TouchableOpacity onPress={() => handleAction[action](name, type)} style={{flexDirection: 'row', justifyContent: 'center'}}>
          {action === 'logout' && <Image source={images.logout} style={{width: 20, height: 20, marginRight: 10}} />}
          <Text style={styles.menuBtn.text}>{name}</Text>
        </TouchableOpacity>
        { selected === name && inputSection[type] }
      </View>
    )
  }
   
  return (
    <>
      <Background img={'tree'} tint={"#B87333"} />
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Return nav={navigation} />
          {menuBtn("Informações Básica", 'select', 'info')}
          {menuBtn("Alterar Senha", 'select', 'password')}
          {menuBtn("Excluir Conta", 'select', 'delete')}
          {menuBtn("Sair", 'logout')}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuBtn: {
    backgroundColor: '#FBECC4',
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 15,
    text: {
      textAlign: 'center',
      fontSize: 16,
      fontWeight: "500"
    }
  },
  inputSection: {
    paddingTop: 15,
    paddingBottom: 15
  },
  infoInput: {
    padding: 5,
    width: "70%",
    alignSelf: 'center',
    borderBottomWidth: 0.5
  },
  submitBtn: {
    backgroundColor: "green",
    marginTop: 20,
    marginRight: 10,
    padding: 10,
    width: "40%",
    alignSelf: 'flex-end',
    borderRadius: 10
  }
})

export default Ajustes;
