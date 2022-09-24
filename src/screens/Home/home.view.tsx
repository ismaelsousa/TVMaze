import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  View,
  RefreshControl,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {useTheme} from 'styled-components/native';
import Container from '../../common/components/Container';
import Cover from '../../common/components/Cover';
import Spacer from '../../common/components/Spacer';
import useMyNavigation from '../../common/hooks/useMyNavigation';
import useHomeController from './home.controller';

import {styleSheet, Logo} from './styles';

const HomeView = () => {
  /**
   * Navigation
   */
  const {navigate} = useMyNavigation();
  const {colors, spacing} = useTheme();

  // Get the controller
  const {loading, shows, isRefreshing, loadShows, currentPage} =
    useHomeController();

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
          columnWrapperStyle={styleSheet.columnWrapperStyle}
          style={{paddingHorizontal: spacing.sm}}
          ListHeaderComponent={() => (
            <View>
              <Logo />
            </View>
          )}
          renderItem={({index, item}: any) => (
            <Cover
              key={index + item.id + item.name}
              url={item.image.medium}
              title={item.name}
              onPress={() => navigate('Detail', {show: item})}
            />
          )}
          ItemSeparatorComponent={() => <Spacer height={spacing.md} />}
          ListFooterComponent={() => {
            return (
              <View>
                {loading && (
                  <>
                    <Spacer height={spacing.lg} />
                    <ActivityIndicator
                      size={'small'}
                      color={colors.onSecondary}
                    />
                  </>
                )}
                <Spacer height={spacing.lg} />
              </View>
            );
          }}
          refreshControl={
            <RefreshControl
              enabled={!isRefreshing}
              tintColor={colors.onSecondary}
              colors={[colors.onSecondary]}
              refreshing={isRefreshing}
              onRefresh={() => {
                loadShows(0, true);
              }}
            />
          }
          onEndReached={() => {
            if (!loading) {
              loadShows(currentPage);
            }
          }}
          onEndReachedThreshold={0.5}
        />
      </SafeAreaView>
    </Container>
  );
};

export default HomeView;
