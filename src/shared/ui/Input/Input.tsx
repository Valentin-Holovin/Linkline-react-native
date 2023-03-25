import React, { useState } from 'react';
import {
  StyleSheet, View, Text, TextInput, TextInputProps,
} from 'react-native';
import { Colors } from 'shared/theme/Colors';
import { FontSizes } from 'shared/theme/Fonts';
import { Icon } from 'ui/Icon/Icon';

interface InputProps extends TextInputProps {
    type?: 'password' | 'email' | 'default'
    label: string
    error?: string
  }

export const Input: React.FC<InputProps> = ({
  type = 'default', label, error, ...textInputProps
}) => {
  const [hide, setHide] = useState(true);
  const [isActive, setIsActive] = useState(false);

  const isPassword = type === 'password';
  const isEmail = type === 'email';

  const activeColor = isActive ? Colors.black : Colors.gray500;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputContainer, {
        paddingRight: !isPassword ? 34 : 0,
        borderColor: error ? Colors.error600 : activeColor,
      }]}
      >
        <TextInput
          style={styles.input}
          placeholderTextColor={Colors.gray500}
          secureTextEntry={hide && isPassword}
          keyboardType={isEmail ? 'email-address' : 'default'}
          onFocus={() => { setIsActive(true); }}
          onBlur={() => { setIsActive(false); }}
          {...textInputProps}
        />
        {isPassword && (
        <Icon
          name={hide ? 'eye-hide' : 'eye'}
          style={styles.icon}
          onPress={() => { setHide(!hide); }}
          fillPrimary={activeColor}
          size={24}
        />
        )}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 20,
  },
  label: {
    marginBottom: 5,
    fontSize: FontSizes.md,
    color: Colors.black,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingLeft: 17,
    height: 44,
    borderRadius: 8,
    borderWidth: 1,
  },
  input: {
    flex: 1,
    fontSize: FontSizes.sm,
  },
  icon: {
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  error: {
    marginLeft: 7,
    fontSize: FontSizes.xs,
    color: Colors.error600,
  },
});
