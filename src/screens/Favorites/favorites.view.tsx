import React from 'react';
import {StatusBar} from 'react-native';
import {useTheme} from 'styled-components/native';
import Container from '../../common/components/Container';

// import {Container} from './styles'

const FavoritesView: React.FC = () => {
  const {colors} = useTheme();
  return (
    <Container>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={colors.secondary}
      />
    </Container>
  );
};

export default FavoritesView;
