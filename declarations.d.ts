declare module '*.svg' {
    import React from 'react';
    import type { SvgIconProps } from 'helpers/Helpers';

    const content: React.FC<SvgIconProps>;
    export default content;
  }
