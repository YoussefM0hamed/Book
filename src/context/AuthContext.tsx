import AsyncStorage from '@react-native-async-storage/async-storage';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {createContext, useContext, useEffect, useState} from 'react';
import {RootStackParamList} from '~/App';
import {User} from '~/types';
import {useCart} from './CartContext';

type CONTEXT_PROPS = {
  user?: User;
  signed: boolean;
  login: (user: User) => void;
  logout: () => void;
};

const init: CONTEXT_PROPS = {
  signed: false,
  login: (_user: User) => {},
  logout: () => {},
};

type AppScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'Login'>,
  StackNavigationProp<RootStackParamList, 'Home'>
>;

const AuthContext = createContext<CONTEXT_PROPS>(init);

const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<User>();
  const [signed, setSigned] = useState<boolean>(false);
  const {clear} = useCart();

  const navigation = useNavigation<AppScreenNavigationProp>();

  // load
  useEffect(() => {
    AsyncStorage.getItem('@auth').then(result => {
      const auth: CONTEXT_PROPS = JSON.parse(result || '{}');

      setUser(auth.user);
      setSigned(auth.signed ?? false);
    });
  }, []);

  // sync
  useEffect(() => {
    if (user) {
      AsyncStorage.setItem('@auth', JSON.stringify({user, signed}));
    } else {
      AsyncStorage.removeItem('@auth');
    }

    navigation.navigate(signed ? 'Home' : 'Login');
  }, [user, signed, navigation]);

  function login(u: User) {
    setUser(u);
    setSigned(true);
  }

  function logout() {
    clear();
    setUser(undefined);
    setSigned(false);
  }

  return (
    <AuthContext.Provider value={{user, signed, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  return useContext(AuthContext);
}

export {useAuth, AuthContext, AuthProvider};
