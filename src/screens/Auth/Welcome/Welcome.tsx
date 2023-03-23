import React from 'react';
import {
  Text, View, Image, StyleSheet,
} from 'react-native';

import { AuthStackScreenProps } from 'navigation/types';

import { FontSizes } from 'shared/theme/Fonts';
import { Colors } from 'shared/theme/Colors';
import { Button } from 'ui';

export const Welcome = ({ navigation }:AuthStackScreenProps<'Welcome'>) => {
  const goToSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('assets/emoji/emoji-smile.png')} />
      <Text style={styles.text}>
        Welcome to LinkLine
      </Text>
      <Button title="Jump now" onPress={goToSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: Colors.white,
  },
  image: {
    marginBottom: 30,
  },
  text: {
    fontWeight: '700',
    fontSize: FontSizes['4xl'],
    textAlign: 'center',
    marginBottom: 30,
  },
});
