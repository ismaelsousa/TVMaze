import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import {defaultTheme} from './common/constants/styles/theme/defaultTheme';
import Routes from './navigation';
import FavoritesShows from './common/contexts/FavoritesShows';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavigationContainer>
        <FavoritesShows>
          <Routes />
        </FavoritesShows>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
