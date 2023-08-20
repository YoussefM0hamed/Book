import React from 'react';
import {Div, Text} from 'react-native-magnus';
import {Icon} from '~/components';
import {useAuth} from '~/context/AuthContext';

const DrawerUser = () => {
  const {user} = useAuth();

  return (
    <Div flexDir={'row'} p={'md'} borderBottomWidth={1} borderColor={'gray300'}>
      <Icon
        name={'user'}
        fontSize={'lg'}
        borderWidth={1}
        borderColor={'gray500'}
        rounded={'circle'}
        p={'md'}
        mr={'md'}
      />
      <Text fontSize={'xl'} numberOfLines={1} fontWeight={'bold'}>
        {user?.name}
      </Text>
    </Div>
  );
};

export default DrawerUser;
