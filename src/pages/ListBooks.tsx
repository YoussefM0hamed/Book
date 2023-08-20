import {RouteProp, useNavigation, useRoute} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {RootStackParamList} from '~/App';
import {BookCard, Container} from '~/components';
import mock from '~/service/mock';

type ListBookScreenRouteProp = RouteProp<RootStackParamList, 'ListBooks'>;
type ListBookScreenStackNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ListBooks'
>;

const ListBooks = () => {
  const {category} = useRoute<ListBookScreenRouteProp>().params || {};

  const navigation = useNavigation<ListBookScreenStackNavigationProp>();

  useEffect(() => {
    navigation.setOptions({title: category?.name || 'Livros'});
  }, [navigation, category]);

  const books = category
    ? mock.books.filter(book => book.category_id === category.id)
    : mock.books;

  return (
    <Container>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={books}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        numColumns={2}
        renderItem={({item}) => <BookCard item={item} />}
      />
    </Container>
  );
};

export default ListBooks;
