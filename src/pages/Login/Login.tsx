import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {defaultTheme, Div, StatusBar, Text} from 'react-native-magnus';
import {Icon} from '~/components';
import Form from './Form';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'indigo100'} />
      <ScrollView contentContainerStyle={styles.scrollview}>
        <Div flex={1} justifyContent={'center'}>
          <Div mb={'xl'}>
            <Text
              textAlign={'center'}
              fontSize={'6xl'}
              mb={'xl'}
              fontWeight={'bold'}>
              BOOK STORE
            </Text>
            <Icon name={'book-open'} fontSize={128} />
          </Div>
          <Form />
        </Div>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultTheme.colors?.indigo100,
  },
  scrollview: {
    margin: defaultTheme.spacing?.xl,
    flex: 1,
    justifyContent: 'center',
  },
});

export default Login;
