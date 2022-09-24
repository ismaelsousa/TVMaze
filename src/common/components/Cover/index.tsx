import React, {useMemo} from 'react';
import {Pressable, useWindowDimensions} from 'react-native';
import {useTheme} from 'styled-components/native';
import Spacer from '../Spacer';
import Text from '../Text';

import {Container, CoverImage} from './styles';
import {CoverProps} from './types';

const aspectRatio = 9 / 12.5;
const widthPercentage = 0.4;

const Cover = ({onPress, title, url}: CoverProps) => {
  const {width} = useWindowDimensions();
  const {spacing} = useTheme();

  const widthCover = useMemo(() => {
    return width * widthPercentage;
  }, [width]);
  return (
    <Pressable
      onPress={onPress}
      accessibilityLabel={title}
      accessibilityRole="button">
      <Container width={widthCover}>
        <CoverImage
          source={{uri: url}}
          resizeMode="contain"
          style={{
            aspectRatio: aspectRatio,
            width: widthCover,
          }}
        />
        <Spacer height={spacing.sm} />
        <Text numberOfLines={2} color="caption">
          {title} {title}
        </Text>
      </Container>
    </Pressable>
  );
};

export default Cover;
