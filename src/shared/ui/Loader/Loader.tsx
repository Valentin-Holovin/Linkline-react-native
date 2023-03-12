import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { Colors } from '../../theme/Colors';

interface LoaderProps {
    color?: string;
    size?: 'small' | 'large';
  }

export const Loader: React.FC<LoaderProps> = ({ color = Colors.white, size = 'small' }) => (
  <View style={styles.container}>
    <ActivityIndicator color={color} size={size} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
