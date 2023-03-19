declare module '*.svg' {
    import React from 'react';
    import { SvgProps } from 'react-native-svg';

    const content: React.FC<SvgProps & {fillSecondary?:string; fillTertiary?:string;
      fillPrimary?:string}>;
    export default content;
  }
