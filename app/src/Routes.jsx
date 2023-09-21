import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { StatusBar } from 'react-native';
// Stack Components
import LoginScreen from './screens/Login';
import MenuScreen from './screens/Menu';
import ResgateScreen from './screens/stack/Resgate';
import DenunciasScreen from './screens/stack/Denuncias';
import AnimaisPerdidosScreen from './screens/stack/AnimaisPerdidos';
import AdocaoScreen from './screens/stack/Adocao';
import DoacaoScreen from './screens/stack/Doacao';
import LarTemporarioScreen from './screens/stack/LarTemporario';
// import DivulgacaoScreen from './screens/stack/Divulgacao';
import NoticiasEventosScreenScreen from './screens/stack/NoticiasEventos';
import NossosProdutosScreen from './screens/stack/NossosProdutos';
import PrestacaoDeContasScreen from './screens/stack/PrestacaoDeContas';
import ApoiadoresScreen from './screens/stack/Apoiadores';
// Sub Stacks
import ProductScreen from './screens/subScreens/Product';
import PaymentScreen from './screens/subScreens/Payment';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#f8f8ff',
    text: 'black'
  }
}

export default function App() {
  const options = {
    headerShown: false,
  };

  return (
    <NavigationContainer theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <Stack.Navigator screenOptions={options} initialRouteName='Login'>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        {/* Menu */}
        <Stack.Screen name="Adocao" component={AdocaoScreen} />
        <Stack.Screen name="Doacao" component={DoacaoScreen} />
        <Stack.Screen name="AnimaisPerdidos" component={AnimaisPerdidosScreen} />
        <Stack.Screen name="Resgate" component={ResgateScreen} />
        <Stack.Screen name="Denuncias" component={DenunciasScreen} />
        <Stack.Screen name="LarTemporario" component={LarTemporarioScreen} />
        <Stack.Screen name="NossosProdutos" component={NossosProdutosScreen} />
        <Stack.Screen name="NoticiasEventos" component={NoticiasEventosScreenScreen} />
        <Stack.Screen name="PrestacaodeContas" component={PrestacaoDeContasScreen} />
        <Stack.Screen name="Apoiadores" component={ApoiadoresScreen} />
        {/* Sub Screens */}
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />

        {/* <Stack.Screen name="Divulgação" component={DivulgacaoScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}