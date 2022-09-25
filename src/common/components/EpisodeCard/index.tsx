import React from 'react';

import {Container} from './styles';
import {EpisodeCardProps} from './types';

const aspectRatio = 16 / 9;
const EpisodeCard = ({name, url, size = 'small'}: EpisodeCardProps) => {
  return (
    <Container
      size={size}
      accessibilityLabel={name}
      accessibilityRole="image"
      source={{uri: url}}
      resizeMode={'contain'}
      style={{aspectRatio}}
    />
  );
};

export default EpisodeCard;
