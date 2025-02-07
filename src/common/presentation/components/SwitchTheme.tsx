import React from 'react';
import {useThemeStore} from '../../store';
import {Switch} from 'react-native';

/**
 * @file SwitchTheme.tsx
 * @description
 * A reusable switch component that controls the app's theme (light/dark mode).
 * This component integrates with the theme store to provide theme switching functionality
 * throughout the app.
 *
 * Features:
 * - Toggles between light and dark themes
 * - Uses themed colors for visual feedback
 * - Persists theme selection via theme store
 * - Simple switch UI with native feel
 */

export const SwitchTheme: React.FC = () => {
  const {currentTheme, setTheme, colors} = useThemeStore();

  const onChangeTheme = (value: boolean): void => {
    setTheme(value ? 'dark' : 'light');
  };

  return (
    <Switch
      trackColor={{
        true: colors.primary,
        false: colors.neutral700,
      }}
      value={currentTheme === 'dark' ? true : false}
      onValueChange={onChangeTheme}
    />
  );
};
