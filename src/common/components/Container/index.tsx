import React from 'react';

import {Content} from './styles';
import {ContainerProps} from './types';

const Container = ({children}: ContainerProps) => {
  return <Content>{children}</Content>;
};

export default Container;
