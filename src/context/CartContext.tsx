import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useContext, useEffect, useState} from 'react';
import {Book} from '~/types';
import sleep from '~/utils/sleep';
import {useModal} from './ModalContext';

type CONTEXT_PROPS = {
  count: number;
  items: Book[];
  total: number;
  add: (book: Book) => void;
  remove: (id: number) => void;
  clear: () => void;
};

const init: CONTEXT_PROPS = {
  count: 0,
  items: [],
  total: 0,
  add: () => {},
  remove: (_id: number) => {},
  clear: () => {},
};

const CartContext = createContext(init);

const CartProvider: React.FC = ({children}) => {
  const [items, setItems] = useState<Book[]>([]);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [rerender, setRerender] = useState(false);

  const {setLoading} = useModal();

  useEffect(() => {
    AsyncStorage.getItem('@cart').then(cart => {
      setItems(JSON.parse(cart || '[]'));
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('@cart', JSON.stringify(items));

    let sum = 0;

    items.forEach(i => (sum += i.price * (i.count as number)));

    setTotal(sum);
    setCount(items.length);
  }, [items, rerender]);

  async function add(book: Book) {
    const item = items.find(i => i.id === book.id);

    setLoading(true);
    await sleep(1);

    if (item) {
      item.count ? item.count++ : (item.count = 1);
    } else {
      book.count = 1;
      items.push(book);
    }

    setLoading(false);
    setRerender(!rerender);
  }

  async function remove(id: number) {
    const item = items.find(i => i.id === id);

    if (!item) {
      return;
    }

    setLoading(true);
    await sleep(1);

    (item.count as number)--;

    if (item.count) {
      setItems(items);
      setRerender(!rerender);
    } else {
      const _items = items.filter(({id: item_id}) => item_id !== id);
      console.log({after: _items});

      setItems(_items);
    }

    setLoading(false);
  }

  function clear() {
    setItems([]);
  }

  return (
    <CartContext.Provider value={{items, count, total, add, remove, clear}}>
      {children}
    </CartContext.Provider>
  );
};

function useCart() {
  return useContext(CartContext);
}

export {useCart, CartContext, CartProvider};
