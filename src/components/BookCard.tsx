import React from 'react';
import {Alert, TouchableOpacity} from 'react-native';
import {Div, Image, Text} from 'react-native-magnus';
import {NumberFormat} from '.';
import {useCart} from '~/context/CartContext';
import {Book} from '~/types';

type PROPS = {
  item: Book;
};

const BookCard = ({item}: PROPS) => {
  const {name, image, price} = item;

  const {add} = useCart();

  async function addToCart() {
    await add(item);

    Alert.alert('Carrinho', `O livro "${name}" foi adicionado ao carrinho.`);
  }

  return (
    <Div
      m={'xs'}
      p={'xs'}
      bg={'blue600'}
      w={200}
      flex={0.5}
      rounded={'md'}
      overflow={'hidden'}>
      <TouchableOpacity onPress={addToCart}>
        <Image height={150} source={image} rounded={'md'} />

        <Div
          bg={'blue600'}
          h={45}
          p={'md'}
          justifyContent={'center'}
          alignItems={'center'}
          py={'xs'}>
          <Text
            fontWeight={'bold'}
            fontSize={'md'}
            color={'white'}
            textAlign={'center'}
            numberOfLines={2}>
            {name}
          </Text>
        </Div>

        <NumberFormat
          value={price}
          bg={'white'}
          fontWeight={'bold'}
          textAlign={'center'}
          py={'xs'}
          rounded={'md'}
        />
      </TouchableOpacity>
    </Div>
  );
};

export default BookCard;
