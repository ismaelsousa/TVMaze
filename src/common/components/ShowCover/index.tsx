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
  ShowCoverImage,
  IconAbsolute,
} from './styles';
import {ShowCoverProps} from './types';

const aspectRatio = 9 / 12.5;
const widthPercentage = 0.45;

//TODO: rename to Show ShowCover
const ShowShowCover = ({onPress, title, url}: ShowCoverProps) => {
  /**
   * Hooks
   */
  const {width} = useWindowDimensions();
  const {spacing} = useTheme();

  /**
   * Memos
   */
  const widthShowCover = useMemo(() => {
    return width * widthPercentage;
  }, [width]);

  return (
    <Pressable
      onPress={onPress}
      accessibilityLabel={title}
      accessibilityRole="button">
      <Container width={widthShowCover}>
        <CenterIconAndImage>
          <ShowCoverImage
            hasBackground={!url}
            source={{uri: url}}
            resizeMode="contain"
            style={{
              aspectRatio: aspectRatio,
              width: widthShowCover,
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

export default memo(ShowShowCover);
