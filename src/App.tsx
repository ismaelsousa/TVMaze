import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import {defaultTheme} from './common/styles/theme/defaultTheme';
// import {Container} from './styles'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavigationContainer>
        <View />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
