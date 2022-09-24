import React from 'react';
import {FlatList, StatusBar, SafeAreaView, View, Image} from 'react-native';
import {useTheme} from 'styled-components/native';
import Container from '../../common/components/Container';
import Cover from '../../common/components/Cover';
import Spacer from '../../common/components/Spacer';
import useHomeController from './home.controller';
import {Logo} from './styles';

const HomeView = () => {
  const {colors, spacing} = useTheme();

  // Get the controller
  const {loading, shows} = useHomeController();

  return (
    <Container>
      <SafeAreaView>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={colors.secondary}
        />

        <FlatList
          data={shows}
          numColumns={2}
          style={{paddingHorizontal: spacing.sm}}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          ListHeaderComponent={() => (
            <View>
              <Logo
                resizeMode="contain"
                source={require('../../assets/imgs/logo.png')}
              />
            </View>
          )}
          renderItem={({index, item}) => (
            <Cover
              key={index + item.id + item.name}
              url={item.image.medium}
              title={item.name}
            />
          )}
          ItemSeparatorComponent={() => <Spacer height={spacing.md} />}
          ListFooterComponent={() => <Spacer height={spacing.lg} />}
        />
      </SafeAreaView>
    </Container>
  );
};

export default HomeView;
