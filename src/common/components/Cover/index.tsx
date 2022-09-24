import React, {memo, useMemo} from 'react';
import {Pressable, useWindowDimensions} from 'react-native';
import {useTheme} from 'styled-components/native';
import {colors} from '../../constants/styles/colors';
import Icon from '../Icon';
import Spacer from '../Spacer';
import Text from '../Text';

import {
  CenterIconAndImage,
  Container,
  CoverImage,
  IconAbsolute,
} from './styles';
import {CoverProps} from './types';

const aspectRatio = 9 / 12.5;
const widthPercentage = 0.45;

const Cover = ({onPress, title, url}: CoverProps) => {
  /**
   * Hooks
   */
  const {width} = useWindowDimensions();
  const {spacing} = useTheme();

  /**
   * Memos
   */
  const widthCover = useMemo(() => {
    return width * widthPercentage;
  }, [width]);

  return (
    <Pressable
      onPress={onPress}
      accessibilityLabel={title}
      accessibilityRole="button">
      <Container width={widthCover}>
        <CenterIconAndImage>
          <CoverImage
            hasBackground={!url}
            source={{uri: url}}
            resizeMode="contain"
            style={{
              aspectRatio: aspectRatio,
              width: widthCover,
            }}
          />
          {!url && (
            <IconAbsolute>
              <Icon icon="picture" size={40} color={colors.caption} />
            </IconAbsolute>
          )}
        </CenterIconAndImage>
        {!!title && (
          <>
            <Spacer height={spacing.sm} />
            <Text numberOfLines={1} color="caption">
              {title}
            </Text>
          </>
        )}
      </Container>
    </Pressable>
  );
};

export default memo(Cover);
