import React from 'react';
import {SpaceProps} from './types';

import {Container} from './styles';

const Spacer = ({height, width}: SpaceProps) => {
  return <Container height={height} width={width} />;
};

export default Spacer;
