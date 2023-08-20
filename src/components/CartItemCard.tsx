import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Div, Image, Text} from 'react-native-magnus';
import {Icon, NumberFormat} from '.';
import {useCart} from '~/context/CartContext';
import {Book} from '~/types';

type PROPS = {
  item: Book;
};

const CartItemCard = ({item}: PROPS) => {
  const {id, image, name, price, count = 1} = item;

  const {add, remove} = useCart();

  return (
    <Div bg={'gray400'} mt={'md'} p={'md'} rounded={'md'} flexDir={'row'}>
      <Image source={image} w={100} h={100} rounded={'md'} mr={'md'} />
      <Div justifyContent={'space-between'} flex={1}>
        <Text fontSize={'lg'} fontWeight={'bold'} numberOfLines={3}>
          {name}
        </Text>
        <NumberFormat
          p={'xs'}
          bg={'white'}
          mr={'md'}
          rounded={'md'}
          value={price}
          fontWeight={'bold'}
        />
      </Div>
      <Div
        flex={0.2}
        bg={'gray300'}
        rounded={'md'}
        alignItems={'center'}
        justifyContent={'space-around'}>
        <TouchableOpacity onPress={() => add(item)}>
          <Icon name={'plus'} color={'gray700'} p={'xs'} />
        </TouchableOpacity>
        <Text color={'gray700'} fontWeight={'bold'}>
          {count}
        </Text>
        <TouchableOpacity onPress={() => remove(id)}>
          {count > 1 ? (
            <Icon name={'minus'} color={'gray700'} p={'xs'} />
          ) : (
            <Icon name={'trash'} color={'red700'} p={'xs'} rounded={'circle'} />
          )}
        </TouchableOpacity>
      </Div>
    </Div>
  );
};

export default CartItemCard;
