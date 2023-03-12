import React from 'react';
import {
  StyleSheet, View, Text, TextInput,
} from 'react-native';
import { Colors } from 'shared/theme/Colors';
import { FontSizes } from 'shared/theme/Fonts';

interface InputProps {
    value?: string;
    label?: string;
    placeholder?: string;
    onChange?: (value: string) => void;
  }

export const Input: React.FC<InputProps> = ({
  value,
  label,
  placeholder,
  onChange,
}) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>

    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      placeholderTextColor={Colors.gray300}
    />

  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    fontSize: FontSizes.md,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
});
