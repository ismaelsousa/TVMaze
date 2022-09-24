import React from 'react';
import {useTheme} from 'styled-components/native';
import Icon from '../Icon';

import {Container} from './styles';
import {BackButtonProps} from './types';

const BackButton = ({onPress}: BackButtonProps) => {
  const {colors} = useTheme();
  return (
    <Container onPress={onPress} hitSlop={40}>
      <Icon icon="arrowLeft" color={colors.onSecondary} />
    </Container>
  );
};

export default BackButton;
