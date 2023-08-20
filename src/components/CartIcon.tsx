import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Button, Div, Text} from 'react-native-magnus';
import {Icon} from '.';
import {RootStackParamList} from '~/App';
import {useCart} from '~/context/CartContext';

type CartScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Cart'>;

const CartIcon = () => {
  const navigation = useNavigation<CartScreenNavigationProp>();

  const {count} = useCart();

  return (
    <Button
      bg={'transparent'}
      alignSelf={'flex-end'}
      mr={'md'}
      onPress={() => navigation.navigate('Cart')}>
      <Div
        bg={'black'}
        rounded={'circle'}
        w={18}
        h={18}
        position={'absolute'}
        top={-10}
        right={-10}
        zIndex={1}
        justifyContent={'center'}
        alignItems={'center'}>
        <Text fontSize={'md'} fontWeight={'bold'} color={'white'}>
          {count}
        </Text>
      </Div>
      <Icon name={'shopping-cart'} fontSize={'xl'} />
    </Button>
  );
};

export default CartIcon;
