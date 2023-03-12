import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { touchableConfig } from 'helpers/Helpers';
import { Loader } from 'ui/Loader/Loader';
import { Colors } from 'shared/theme/Colors';
import { FontSizes } from 'shared/theme/Fonts';

interface ButtonProps {
    onPress?: () => void;
    title?: string;
    isLoading?: boolean;
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onPress, title, isLoading, disabled,
}) => (
  <TouchableOpacity
    {...touchableConfig}
    onPress={onPress}
    disabled={isLoading || disabled}
    style={styles.button}
  >
    {isLoading ? <Loader /> : (
      <Text style={styles.text}>{title}</Text>
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 46,
    backgroundColor: Colors.primary500,
    borderRadius: 8,
  },
  text: {
    color: Colors.white,
    fontSize: FontSizes.md,
    fontWeight: '700',
  },
});
