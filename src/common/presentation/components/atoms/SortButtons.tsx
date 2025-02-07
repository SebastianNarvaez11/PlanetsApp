import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {normVSize} from '../../../../config/constants';
import {useThemeStore} from '../../../store';

type SortOrder = 'asc' | 'desc';

interface SortButtonsProps {
  sortOrder: SortOrder;
  onSortChange: (order: SortOrder) => void;
  containerStyle?: object;
  label?: string;
}

/**
 * @file SortButtons.tsx
 * @description
 * A reusable component that provides sorting functionality with ascending/descending buttons.
 * This component is used in the planets listing screen to enable sorting planets by name.
 *
 * Features:
 * - Themed styling that adapts to light/dark mode
 * - Two buttons for ascending (A-Z) and descending (Z-A) sort
 * - Customizable label and container styling
 * - Memoized to prevent unnecessary re-renders
 */
export const SortButtons = React.memo(
  ({
    sortOrder,
    onSortChange,
    containerStyle,
    label = 'Ordenar por:',
  }: SortButtonsProps) => {
    const {colors} = useThemeStore();

    return (
      <View style={[styles.sortContainer, containerStyle]}>
        <Text style={[styles.sortLabel, {color: colors.text}]}>{label}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.sortButton,
              {
                backgroundColor:
                  sortOrder === 'asc'
                    ? colors.primary
                    : colors.backgroundPrimary,
                borderColor: colors.primary,
              },
            ]}
            onPress={() => onSortChange('asc')}>
            <Text
              style={[
                styles.buttonText,
                {
                  color:
                    sortOrder === 'asc'
                      ? colors.backgroundPrimary
                      : colors.primary,
                },
              ]}>
              A-Z
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.sortButton,
              {
                backgroundColor:
                  sortOrder === 'desc'
                    ? colors.primary
                    : colors.backgroundPrimary,
                borderColor: colors.primary,
              },
            ]}
            onPress={() => onSortChange('desc')}>
            <Text
              style={[
                styles.buttonText,
                {
                  color:
                    sortOrder === 'desc'
                      ? colors.backgroundPrimary
                      : colors.primary,
                },
              ]}>
              Z-A
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  sortContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: normVSize(10),
  },
  sortLabel: {
    fontSize: normVSize(16),
    marginRight: normVSize(10),
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: normVSize(10),
  },
  sortButton: {
    paddingHorizontal: normVSize(15),
    paddingVertical: normVSize(8),
    borderRadius: normVSize(20),
    borderWidth: 1,
    minWidth: normVSize(60),
    alignItems: 'center',
  },
  buttonText: {
    fontSize: normVSize(14),
    fontWeight: '600',
  },
});
