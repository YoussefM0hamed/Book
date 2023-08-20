import React from 'react';
import {Icon as IconBase, IconProps} from 'react-native-magnus';

const Icon = (props: IconProps) => {
  return <IconBase {...props} fontFamily="FontAwesome5" />;
};

export default Icon;
