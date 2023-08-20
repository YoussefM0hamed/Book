import React from 'react';
import {SafeAreaView} from 'react-native';
import {useCart} from '~/context/CartContext';
import Cart from './Cart';
import CartEmpty from './CartEmpty';

export default () => {
  const {items, total} = useCart();

  return (
    <SafeAreaView style={{flex: 1}}>
      {total > 0 ? <Cart {...{items, total}} /> : <CartEmpty />}
    </SafeAreaView>
  );
};
