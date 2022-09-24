import React from 'react';
import {TextProps} from 'react-native';
import {ColorPalette} from 'styled-components/native';

export interface Props extends TextProps {
  color?: ColorPalette;
  size?: number;
  children: string | React.ReactNode;
}
