import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavoritesView from '../../screens/Favorites/favorites.view';
import HomeView from '../../screens/Home/home.view';
import {useTheme} from 'styled-components/native';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  const {colors} = useTheme();

  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.onSecondary,
        tabBarInactiveTintColor: colors.caption,
        tabBarStyle: {
          backgroundColor: colors.secondary,
        },
        header: () => null,
      }}>
      <BottomTab.Screen component={HomeView} name="Home" />
      <BottomTab.Screen component={FavoritesView} name="Favorites" />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
