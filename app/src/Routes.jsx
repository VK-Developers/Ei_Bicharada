import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { StatusBar } from 'react-native';
// Stack Components
import MenuScreen from './screens/Menu';
import ResgateScreen from './screens/stack/Resgate';
import DenunciasScreen from './screens/stack/Denuncias';
import AnimaisPerdidosScreen from './screens/stack/AnimaisPerdidos';
import AdocaoScreen from './screens/stack/Adocao';
import DoacaoScreen from './screens/stack/Doacao';
import EventosScreen from './screens/stack/Eventos';
import DivulgacaoScreen from './screens/stack/Divulgacao';
import NoticiasScreen from './screens/stack/Noticias';
import NossosProdutosScreen from './screens/stack/NossosProdutos';
import PrestacaoDeContasScreen from './screens/stack/PrestacaoDeContas';

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
      <Stack.Navigator screenOptions={options} initialRouteName='Menu'>
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Resgate" component={ResgateScreen} />
        <Stack.Screen name="Denúncias" component={DenunciasScreen} />
        <Stack.Screen name="AnimaisPerdidos" component={AnimaisPerdidosScreen} />
        <Stack.Screen name="Adoção" component={AdocaoScreen} />
        <Stack.Screen name="Doação" component={DoacaoScreen} />
        <Stack.Screen name="Eventos" component={EventosScreen} />
        <Stack.Screen name="Divulgação" component={DivulgacaoScreen} />
        <Stack.Screen name="Noticias" component={NoticiasScreen} />
        <Stack.Screen name="NossosProdutos" component={NossosProdutosScreen} />
        <Stack.Screen name="PrestaçãodeContas" component={PrestacaoDeContasScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}