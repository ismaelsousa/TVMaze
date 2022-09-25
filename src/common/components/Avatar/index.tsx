import React from 'react';

import {AvatarProps} from './types';
import {AbsoluteIcon, Container, Content} from './styles';
import {useTheme} from 'styled-components/native';

const Avatar = ({name, url, size = 'small'}: AvatarProps) => {
  const {colors} = useTheme();
  return (
    <Content>
      <Container
        size={size}
        source={{uri: url}}
        accessibilityRole="image"
        accessibilityLabel={name}
        resizeMode="cover"
      />
      {!url && <AbsoluteIcon size={50} icon="person" color={colors.caption} />}
    </Content>
  );
};

export default Avatar;
