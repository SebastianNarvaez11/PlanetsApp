import React, {FC} from 'react';
import {ActivityIndicatorProps} from 'react-native';
import {ActivityIndicator} from 'react-native';

/**
 * @file Spinner.tsx
 * @description
 * A reusable loading spinner component that wraps React Native's ActivityIndicator.
 * This component is used throughout the app to indicate loading states, such as when
 * fetching planet data or waiting for favorites to load.
 */
export const Spinner: FC<ActivityIndicatorProps> = props => {
  return <ActivityIndicator {...props} />;
};
