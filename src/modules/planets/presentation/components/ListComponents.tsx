import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '../../../../common/presentation/components';
import {normVSize} from '../../../../config/constants';

export const ListSeparator = () => <View style={styles.separator} />;

export const ListEmpty = () => (
  <Text text={'No hay planetas'} size={15} align="center" />
);

const styles = StyleSheet.create({
  separator: {
    height: normVSize(90),
  },
});
