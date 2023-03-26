import { Platform } from 'react-native';

import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { SvgProps } from 'react-native-svg';

import { FontSizes } from 'shared/theme/Fonts';

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

export const headerTitleStyle: NativeStackNavigationOptions['headerTitleStyle'] = {
  fontSize: FontSizes['3xl'],
  fontWeight: '700',
};
