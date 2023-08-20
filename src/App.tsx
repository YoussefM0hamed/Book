/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {ThemeProvider} from 'react-native-magnus';
import {CartProvider} from './context/CartContext';
import {Home, ListBooks, Login} from './pages';
import {CartIcon} from './components';
import Cart from './pages/Cart';
import {Category} from './types';
import {AuthProvider} from './context/AuthContext';
import {ModalProvider} from './context/ModalContext';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  ListBooks?: {
    category: Category;
  };
  Cart: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => (
  <SafeAreaProvider>
    <ThemeProvider>
      <NavigationContainer>
        <ModalProvider>
          <CartProvider>
            <AuthProvider>
              <Stack.Navigator
                initialRouteName={'Login'}
                screenOptions={{
                  headerRight: () => <CartIcon />,
                  headerBackTitle: 'Voltar',
                }}>
                <Stack.Screen
                  options={{headerShown: false}}
                  name="Login"
                  component={Login}
                />
                <Stack.Screen
                  options={{
                    headerShown: false,
                    gestureEnabled: false,
                  }}
                  name={'Home'}
                  component={Home}
                />
                <Stack.Screen name={'ListBooks'} component={ListBooks} />
                <Stack.Screen
                  options={{
                    title: 'Carrinho',
                    headerRight: undefined,
                  }}
                  name={'Cart'}
                  component={Cart}
                />
              </Stack.Navigator>
            </AuthProvider>
          </CartProvider>
        </ModalProvider>
      </NavigationContainer>
    </ThemeProvider>
  </SafeAreaProvider>
);

export default App;
