import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailView from '../screens/Detail/detail.view';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
      <Stack.Screen name="Detail" component={DetailView} />
    </Stack.Navigator>
  );
};

export default Routes;
