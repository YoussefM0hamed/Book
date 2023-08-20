import React from 'react';
import {StyleSheet} from 'react-native';
import {defaultTheme, Div, Host} from 'react-native-magnus';

const Container: React.FC = ({children}) => {
  return (
    <Div style={styles.container}>
      <Host>{children}</Host>
    </Div>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultTheme.colors?.indigo100,
  },
});

export default Container;
