import React from 'react';
import {View} from 'react-native';
import {useTheme} from 'styled-components/native';
import Icon from '../Icon';

import {AbsoluteIconEpisodeCover, Container} from './styles';
import {EpisodeCoverProps} from './types';

const aspectRatio = 16 / 9;
const EpisodeCover = ({name, url, size = 'small'}: EpisodeCoverProps) => {
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
        <AbsoluteIconEpisodeCover>
          <Icon icon="picture" color={colors.caption} />
        </AbsoluteIconEpisodeCover>
      )}
    </View>
  );
};

export default EpisodeCover;
