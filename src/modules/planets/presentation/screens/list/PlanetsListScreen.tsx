import React from 'react';
import {
  ScreenLayout,
  SwitchTheme,
  Text,
} from '../../../../../common/presentation/components';
import {View} from 'react-native';
import {styles} from './styles';
import {PlanetList} from '../../components';

/**
 * Main screen component that displays a list of planets and theme switch
 * @component PlanetsListScreen
 * @returns {JSX.Element} Screen with planets list and theme controls
 */
export const PlanetsListScreen = () => {
  return (
    <ScreenLayout withScroll={false}>
      <View style={styles.container}>
        <Text text="Planetas" size={40} align="center" fontWeight="bold" />
        <SwitchTheme />
      </View>

      <PlanetList />
    </ScreenLayout>
  );
};
