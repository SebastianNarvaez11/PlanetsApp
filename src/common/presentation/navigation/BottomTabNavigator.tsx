import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {useThemeStore} from '../../store';
import {
  PlanetsListScreen,
  FavoritesPlantesScreen,
} from '../../../modules/planets/presentation/screens';
import {normSize} from '../../../config/constants';

export type BottomTabParams = {
  HomeScreen: undefined;
  FavoriteScreen: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParams>();

/**
 * Main bottom tab navigator component that provides navigation between
 * the planets list and favorites screens
 *
 * @returns Bottom tab navigation component with themed styling
 */
export const BottomTabNavigator = () => {
  const {colors} = useThemeStore();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.neutral700,
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: normSize(16),
        },
        tabBarIconStyle: {display: 'none'},
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={PlanetsListScreen}
        options={{
          title: 'Inicio',
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="FavoriteScreen"
        component={FavoritesPlantesScreen}
        options={{
          title: 'Favoritos',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
