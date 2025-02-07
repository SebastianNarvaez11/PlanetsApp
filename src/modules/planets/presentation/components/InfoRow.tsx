
import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {useThemeStore} from '../../../../common/store';
import {Text} from '../../../../common/presentation/components';

interface InfoRowProps {
  label: string;
  value: string;
}

/**
 * A component that displays a row with a label and value in a horizontal layout
 */
export const InfoRow: FC<InfoRowProps> = ({label, value}) => {
  const {colors} = useThemeStore();

  return (
    <View style={styles.infoRow}>
      <Text text={label} size={16} color={colors.neutral700} />
      <Text text={value} size={16} />
    </View>
  );
};

const styles = StyleSheet.create({
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
});
