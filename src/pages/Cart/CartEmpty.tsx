import React from 'react';
import {Div, Text} from 'react-native-magnus';
import {Icon} from '~/components';

const CartEmpty = () => {
  return (
    <Div flex={1} justifyContent={'center'} alignItems={'center'}>
      <Icon fontSize={128} name={'book-open'} />
      <Text fontSize={'6xl'} fontWeight={'bold'}>
        Carrinho vazio
      </Text>
    </Div>
  );
};

export default CartEmpty;
