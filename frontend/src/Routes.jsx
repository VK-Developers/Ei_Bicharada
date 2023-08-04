import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { StatusBar } from 'react-native';
// Stack Components
import MenuScreen from './screens/Menu';
import ResgateScreen from './screens/stack/Resgate';
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}