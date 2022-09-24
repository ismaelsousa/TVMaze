import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavoritesView from '../../screens/Favorites/favorites.view';
import HomeView from '../../screens/Home/home.view';
import {useTheme} from 'styled-components/native';
import Icon from '../../common/components/Icon';
import SearchView from '../../screens/Search/search.view';

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
      <BottomTab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon icon="home" size={size} color={color} />
          ),
        }}
        component={HomeView}
        name="Home"
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon icon="search" size={size} color={color} />
          ),
        }}
        component={SearchView}
        name="Search"
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon icon="favorite" size={size} color={color} />
          ),
        }}
        component={FavoritesView}
        name="Favorites"
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
