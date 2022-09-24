import React from 'react';

import {Container} from './styles';
import {Props} from './types';

const Text = ({color = 'onSecondary', size = 14, children, ...rest}: Props) => {
  return (
    <Container color={color} size={size} {...rest}>
      {children}
    </Container>
  );
};

export default Text;
