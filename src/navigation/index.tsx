import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailView from '../screens/Detail/detail.view';
import BottomTabNavigator from './BottomTabNavigator';
import PersonView from '../screens/Person/person.view';
import PinLockerView from '../screens/PinLocker/pin.locker.view';
import {AppState, AppStateStatus} from 'react-native';
import useMyNavigation from '../common/hooks/useMyNavigation';
import {StackActions} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const {reset, getState, dispatch, addListener, removeListener} =
    useMyNavigation();

  const [appState, setAppState] = useState<AppStateStatus>(
    AppState.currentState,
  );

  const [routes, setRoutes] = useState<Array<{name: string}>>([
    {name: 'PinLocker'},
  ]);

  const onPinLockerScreen = useMemo(() => {
    if (appState) {
      const foundRoute = routes.find(route => route.name === 'PinLocker');
      if (foundRoute) {
        return true;
      } else {
        return false;
      }
    }
  }, [routes, appState]);

  const handleRouteChange = useCallback((e: any) => {
    if (e?.data?.state?.routes) {
      setRoutes(e.data.state.routes);
    }
  }, []);

  useEffect(() => {
    addListener('state', handleRouteChange);

    const subscription = AppState.addEventListener('change', setAppState);
    return () => {
      removeListener('state', handleRouteChange);
      subscription.remove();
    };
  }, [addListener, handleRouteChange, removeListener]);

  useEffect(() => {
    if (
      (appState === 'inactive' || appState === 'background') &&
      onPinLockerScreen === false
    ) {
      dispatch(StackActions.push('PinLocker'));
    }
  }, [appState, dispatch, getState, onPinLockerScreen, reset]);

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
