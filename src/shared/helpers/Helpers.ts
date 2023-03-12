import { Platform } from 'react-native';

export type AnyType = any;

export const isIOS = Platform.OS === 'ios';

export const touchableConfig = {
  delayPressIn: 0,
  delayPressOut: 0,
  activeOpacity: 0.8,
};
