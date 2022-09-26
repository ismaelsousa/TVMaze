import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailView from '../screens/Detail/detail.view';
import BottomTabNavigator from './BottomTabNavigator';
import PersonView from '../screens/Person/person.view';
import PinLockerView from '../screens/PinLocker/pin.lock.view';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="PinLocker" component={PinLockerView} />
      <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
      <Stack.Screen name="Detail" component={DetailView} />
      <Stack.Screen name="Person" component={PersonView} />
    </Stack.Navigator>
  );
};

export default Routes;
