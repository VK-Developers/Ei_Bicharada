import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { StatusBar, Image } from 'react-native';
// Stack Components
import LoginScreen from './screens/Login';
import NewUserScreen from './screens/stack/NewUser';
import CoverScreen from './screens/stack/Cover';
import AdocaoScreen from './screens/stack/Adocao';
import ResgateScreen from './screens/stack/Resgate';
import DenunciasScreen from './screens/stack/Denuncias';
import AnimaisPerdidosScreen from './screens/stack/AnimaisPerdidos';
import ContribuicaoScreen from './screens/stack/Contribuicao';
import LarTemporarioScreen from './screens/stack/LarTemporario';
import NoticiasEventosScreenScreen from './screens/stack/NoticiasEventos';
import NossosProdutosScreen from './screens/stack/NossosProdutos';
import PrestacaoDeContasScreen from './screens/stack/PrestacaoDeContas';
import ApoiadoresScreen from './screens/stack/Apoiadores';
import RifasScreen from './screens/stack/Rifas';
// Sub Stacks
import ProductScreen from './screens/subScreens/Product';
import AnimalScreen from './screens/subScreens/Animal';
import PaymentScreen from './screens/subScreens/Payment';
import ArticleScreen from './screens/subScreens/Article';
import AbuseConfirmScreen from './screens/subScreens/AbuseConfirm';
import RifaScreen from './screens/subScreens/Rifa'
// Tab
import TAdoptionScreen from './screens/tab/TAdoption';
import TMissingScreen from './screens/tab/TMissing';
import TAlertScreen from './screens/tab/TAlert';
import TRescueScreen from './screens/tab/TRescue';
import TComplainScreen from './screens/tab/TComplain';


import images from './localized/images';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const mainTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#f8f8ff',
    text: 'white'
  }
}

// const admTheme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     background: '#36454F',
//     text: 'black'
//   }
// }

const AdmMenu = () => {
  const options = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarActiveBackgroundColor: '#483d8b',
    tabBarStyle: { 
      backgroundColor: 'rgb(07,25,51)',
      borderTopWidth: 0,
      height: Platform.OS === 'ios' ? 85 : 65,
    },
    
  };

  const icon = (name, _focused) => {
    const css = {width: 40, height: 40};
    let imagePath;
    switch (name) {
      case 'adoption':
        imagePath = images.tab.adoption;
        break;
      case 'missing':
        imagePath = images.tab.missing;
        break;
      case 'alert':
        imagePath = images.tab.alert;
        break;
      case 'rescue':
        imagePath = images.tab.rescue;
        break;
      case 'complain':
        imagePath = images.tab.complain;
        break;
    }
    
    return <Image source={imagePath} style={css} />
  }

  return (
    <Tab.Navigator initialRouteName='TAlert' screenOptions={options} >
      <Tab.Screen 
        name="TAdoption" 
        component={TAdoptionScreen}
        options={{ tabBarIcon: ({focused}) => icon('adoption', focused) }}
      />
      <Tab.Screen
        name="TMissing" 
        component={TMissingScreen}
        options={{ tabBarIcon: ({focused}) => icon('missing', focused) }}
      />
      <Tab.Screen 
        name="TAlert"
        component={TAlertScreen}
        options={{ tabBarIcon: ({focused}) => icon('alert', focused) }}
      />
      <Tab.Screen 
        name="TRescue"
        component={TRescueScreen}
        options={{ tabBarIcon: ({focused}) => icon('rescue', focused) }}
      />
      <Tab.Screen 
        name="TComplain"
        component={TComplainScreen}
        options={{ tabBarIcon: ({focused}) => icon('complain', focused) }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  const options = {
    headerShown: false,
  };

  return (
    <NavigationContainer theme={mainTheme}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <Stack.Navigator screenOptions={options} initialRouteName='Login'>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="NewUser" component={NewUserScreen} />
        {/* Menu */}
        <Stack.Screen name="Cover" component={CoverScreen} />
        <Stack.Screen name="Adocao" component={AdocaoScreen} />
        <Stack.Screen name="Contribuicao" component={ContribuicaoScreen} />
        <Stack.Screen name="AnimaisPerdidos" component={AnimaisPerdidosScreen} />
        <Stack.Screen name="Resgate" component={ResgateScreen} />
        <Stack.Screen name="Denuncias" component={DenunciasScreen} />
        <Stack.Screen name="LarTemporario" component={LarTemporarioScreen} />
        <Stack.Screen name="NossosProdutos" component={NossosProdutosScreen} />
        <Stack.Screen name="Noticias&Eventos" component={NoticiasEventosScreenScreen} />
        <Stack.Screen name="PrestacaodeContas" component={PrestacaoDeContasScreen} />
        <Stack.Screen name="Apoiadores" component={ApoiadoresScreen} />
        <Stack.Screen name="Rifas" component={RifasScreen} />
        {/* Sub Screens */}
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Animal" component={AnimalScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Article" component={ArticleScreen} />
        <Stack.Screen name="AbuseConfirm" component={AbuseConfirmScreen} />
        <Stack.Screen name="Rifa" component={RifaScreen} />

        <Stack.Screen name="Adm" component={AdmMenu} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
