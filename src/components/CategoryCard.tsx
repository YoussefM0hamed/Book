import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Div, Image, Text} from 'react-native-magnus';
import {RootStackParamList} from '~/App';
import {Category} from '~/types';

type PROPS = {
  item: Category;
};

type ListBookScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ListBooks'
>;

const CategoryCard = ({item}: PROPS) => {
  const navigation = useNavigation<ListBookScreenNavigationProp>();

  const {name, image} = item;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ListBooks', {category: item})}>
      <Div w={130} m={'xs'}>
        <Image h={100} source={image} roundedTop={'md'} />
        <Div
          bg={'blue600'}
          p={'md'}
          roundedBottom={'md'}
          h={45}
          roundedTop={0}
          justifyContent={'center'}
          alignItems={'center'}
          py={'xs'}>
          <Text
            fontWeight={'bold'}
            fontSize={'sm'}
            color={'white'}
            numberOfLines={2}
            textAlign={'center'}>
            {name}
          </Text>
        </Div>
      </Div>
    </TouchableOpacity>
  );
};

export default CategoryCard;
