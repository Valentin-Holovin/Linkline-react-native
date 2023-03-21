import { Platform } from 'react-native';

import { SvgProps } from 'react-native-svg';

export type AnyType = any;

export type SvgIconProps = SvgProps & {
  fillPrimary?:string;
  fillSecondary?:string;
  fillTertiary?:string;
}

export const isIOS = Platform.OS === 'ios';

export const touchableConfig = {
  delayPressIn: 0,
  delayPressOut: 0,
  activeOpacity: 0.8,
};
