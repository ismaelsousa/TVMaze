import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import {defaultTheme} from './common/constants/styles/theme/defaultTheme';
import Routes from './navigation';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
