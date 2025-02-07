import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PlanetDetailScreen} from '../../../modules/planets/presentation/screens';
import {BottomTabNavigator} from './BottomTabNavigator';

export type RootStackParams = {
  BottomTabNavigator: undefined;
  PlanetDetail: {id: string};
};

const Stack = createStackNavigator<RootStackParams>();

/**
 * Root stack navigation component that handles the main navigation flow of the app,
 * including the bottom tab navigation and planet detail screens.
 */
export const RootStackNavigator = () => (
  <Stack.Navigator initialRouteName="BottomTabNavigator">
    <Stack.Screen
      name="BottomTabNavigator"
      component={BottomTabNavigator}
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="PlanetDetail"
      component={PlanetDetailScreen}
      options={{
        title: 'Detalle del planeta',
      }}
    />
  </Stack.Navigator>
);
