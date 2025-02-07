import React from 'react';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import {normVSize} from '../../../../config/constants';
import {useThemeStore} from '../../../store';

interface SearchInputProps extends Omit<TextInputProps, 'style'> {
  containerStyle?: object;
}

/**
 * @file SearchInput.tsx
 * @description
 * A reusable search input component that provides a themed text input field for search functionality.
 * This component is used in the planets listing screen to enable filtering planets by name.
 *
 * Features:
 * - Themed styling that adapts to light/dark mode
 * - Search-optimized input with appropriate keyboard settings
 * - Customizable container styling
 * - Memoized to prevent unnecessary re-renders
 */

export const SearchInput = React.memo(
  ({containerStyle, ...props}: SearchInputProps) => {
    const {colors} = useThemeStore();

    return (
      <View style={[styles.container, containerStyle]}>
        <TextInput
          {...props}
          style={[
            styles.input,
            {
              color: colors.text,
              borderColor: colors.neutral700,
              backgroundColor: colors.backgroundPrimary,
            },
          ]}
          placeholderTextColor={colors.neutral700}
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={50}
          returnKeyType="search"
          blurOnSubmit={true}
        />
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: normVSize(10),
  },
  input: {
    height: normVSize(40),
    borderRadius: normVSize(8),
    paddingHorizontal: normVSize(15),
    fontSize: normVSize(16),
    borderWidth: 1,
  },
});
