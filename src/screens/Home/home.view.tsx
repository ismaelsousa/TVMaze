import React from 'react';
import {StatusBar, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from 'styled-components/native';
import Container from '../../common/components/Container';
import Cover from '../../common/components/Cover';
import {showMocked} from '../../common/constants/mocks/show.mock';

// import {Container} from './styles'

const HomeView: React.FC = () => {
  const {colors} = useTheme();
  return (
    <Container>
      <SafeAreaView>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={colors.secondary}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Cover url={showMocked.image.medium} title={showMocked.name} />
          <Cover
            url={
              'https://static.tvmaze.com/uploads/images/medium_portrait/178/445621.jpg'
            }
            title={showMocked.name}
          />
        </View>
      </SafeAreaView>
    </Container>
  );
};

export default HomeView;
