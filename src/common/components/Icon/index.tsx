import React from 'react';
import {ImageProps} from 'react-native';
import {IconOptionProps} from './types';
import Icons from '../../constants/icons';
import {Container} from './styles';

const Icon = ({
  icon,
  size = 20,
  color,
  style,
  ...rest
}: Omit<IconProps, 'source'>) => {
  return (
    <Container
      size={size}
      source={Icons[icon]}
      style={[{tintColor: color}, style]}
      resizeMode="contain"
      {...rest}
    />
  );
};

export default Icon;

export interface IconProps extends ImageProps, IconOptionProps {}
