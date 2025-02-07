import React from 'react';
import {useThemeStore} from './common/store';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {RootStackNavigator} from './common/presentation/navigation';
import {ThemeProvider} from './common/presentation/providers';

const queryClient = new QueryClient();

/**
 * Main App component
 * Sets up the application with React Query for data management,
 * theme switching functionality, and navigation routing.
 */

function App(): React.JSX.Element {
  const {currentTheme} = useThemeStore();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer
        theme={currentTheme === 'light' ? DefaultTheme : DarkTheme}>
        <ThemeProvider>
          <RootStackNavigator />
        </ThemeProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
