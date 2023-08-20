import React from 'react';
import {Div} from 'react-native-magnus';

const Hr = () => {
  return (
    <Div my={'lg'} alignItems={'center'}>
      <Div bg={'gray'} w={'25%'} h={4} rounded={'circle'} />
    </Div>
  );
};

export default Hr;
