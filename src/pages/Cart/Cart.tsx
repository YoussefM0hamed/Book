import React from 'react';
import {Alert, FlatList} from 'react-native';
import {Button, Div, Text} from 'react-native-magnus';
import {CartItemCard, Container, Hr, NumberFormat} from '~/components';
import {useCart} from '~/context/CartContext';
import {Book} from '~/types';

type PROPS = {
  items: Book[];
  total: number;
};

const Cart = ({items, total}: PROPS) => {
  const {clear} = useCart();

  function checkout() {
    clear();

    Alert.alert(
      'Sucesso!',
      `Compra no valor de ${total} finalizada com sucesso.`,
    );
  }

  return (
    <Container>
      <Div px={'md'} flex={1}>
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={items}
          renderItem={({item}) => <CartItemCard item={item} />}
        />

        <Hr />

        <Div flexDir={'row'} justifyContent={'space-between'}>
          <Text fontSize={'lg'} fontWeight={'bold'}>
            Total
          </Text>
          <NumberFormat value={total} fontSize={'lg'} fontWeight={'bold'} />
        </Div>
      </Div>
      <Button block m={'md'} bg={'indigo400'} onPress={checkout}>
        Finalizar compra
      </Button>
    </Container>
  );
};

export default Cart;
