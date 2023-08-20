import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Button} from 'react-native-magnus';
import {RootStackParamList} from '~/App';
import {Icon} from '~/components';

type PROPS = {
  route?: keyof RootStackParamList;
  onPress?: () => void;
  label: string;
  icon: string;
};

type MainStackProps = StackNavigationProp<RootStackParamList>;

const DrawerButton = ({route, onPress, label, icon}: PROPS) => {
  const navigation = useNavigation<MainStackProps>();

  function run() {
    if (route) {
      navigation.navigate(route);
    }

    if (onPress) {
      onPress();
    }
  }

  return (
    <Button
      onPress={run}
      block
      mb={'xs'}
      rounded={'none'}
      bg={'transparent'}
      color={'gray700'}
      justifyContent={'flex-start'}
      fontWeight={'bold'}
      prefix={<Icon name={icon} fontSize={'xl'} mr={'md'} />}>
      {label}
    </Button>
  );
};

export default DrawerButton;
