import React from 'react';
import {StatusBar} from 'react-native';
import {useTheme} from 'styled-components/native';

import {Content} from './styles';
import {ContainerProps} from './types';

const Container = ({children}: ContainerProps) => {
  const {colors} = useTheme();
  return (
    <Content>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={colors.secondary}
      />
      {children}
    </Content>
  );
};

export default Container;
