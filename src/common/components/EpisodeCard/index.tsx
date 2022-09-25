import React from 'react';
import {View} from 'react-native';
import {useTheme} from 'styled-components/native';
import Icon from '../Icon';

import {AbsoluteIconEpisodeCard, Container} from './styles';
import {EpisodeCardProps} from './types';

const aspectRatio = 16 / 9;
const EpisodeCard = ({name, url, size = 'small'}: EpisodeCardProps) => {
  const {colors} = useTheme();
  return (
    <View>
      <Container
        size={size}
        accessibilityLabel={name}
        accessibilityRole="image"
        source={{uri: url}}
        resizeMode={'contain'}
        style={{aspectRatio}}
      />
      {!url && (
        <AbsoluteIconEpisodeCard>
          <Icon icon="picture" color={colors.caption} />
        </AbsoluteIconEpisodeCard>
      )}
    </View>
  );
};

export default EpisodeCard;
