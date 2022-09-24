import React from 'react';
import {TextInputProps} from 'react-native';
import {useTheme} from 'styled-components/native';
import Icon from '../Icon';

import {AbsoluteIcon, Container, Content} from './styles';

const Input = ({...props}: TextInputProps) => {
  const {colors} = useTheme();
  return (
    <Content>
      <Container
        placeholder="Search"
        selectionColor={colors.onSecondary}
        placeholderTextColor={colors.caption}
        {...props}
      />
      <AbsoluteIcon>
        <Icon icon="magnify" color={colors.caption} />
      </AbsoluteIcon>
    </Content>
  );
};

export default Input;
