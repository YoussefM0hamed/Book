import React, {createContext, Dispatch, useContext, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {defaultTheme, Overlay, Text} from 'react-native-magnus';

type CONTEXT_PROPS = {
  setLoading: Dispatch<boolean>;
};

const init: CONTEXT_PROPS = {
  setLoading: (_value: boolean) => {},
};

const ModalContext = createContext<CONTEXT_PROPS>(init);

const ModalProvider: React.FC = ({children}) => {
  const [loading, setLoading] = useState(false);

  return (
    <ModalContext.Provider value={{setLoading}}>
      {loading && (
        <Overlay
          visible={loading}
          p="xl"
          h={200}
          w={250}
          justifyContent={'center'}
          alignItems={'center'}>
          <ActivityIndicator
            size={'large'}
            color={defaultTheme.colors?.indigo500}
          />
          <Text mt="lg" fontSize={'xl'} fontWeight={'bold'}>
            Carregando...
          </Text>
        </Overlay>
      )}
      {children}
    </ModalContext.Provider>
  );
};

function useModal() {
  return useContext(ModalContext);
}

export {useModal, ModalContext, ModalProvider};
