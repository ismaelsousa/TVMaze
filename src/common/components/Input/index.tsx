import React from 'react';
import {ActivityIndicator, Platform} from 'react-native';
import {useTheme} from 'styled-components/native';
import Icon from '../Icon';

import {AbsoluteIcon, AbsoluteLoading, Container, Content} from './styles';
import {InputProps} from './types';

const Input = ({loading, ...props}: InputProps) => {
  const {colors} = useTheme();
  return (
    <Content>
      <Container
        placeholder="Search"
        selectionColor={colors.onSecondary}
        placeholderTextColor={colors.caption}
        {...props}
      />
      {loading && (
        <AbsoluteLoading>
          <ActivityIndicator
            size={Platform.OS === 'ios' ? 'small' : 'large'}
            color={colors.onSecondary}
          />
        </AbsoluteLoading>
      )}

      <AbsoluteIcon>
        <Icon icon="magnify" color={colors.caption} />
      </AbsoluteIcon>
    </Content>
  );
};

export default Input;
