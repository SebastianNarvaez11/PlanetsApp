import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useThemeStore} from '../../../../common/store';
import {Text} from '../../../../common/presentation/components';
import {normVSize} from '../../../../config/constants';
import {IPlanetModel} from '../../domain/models';
import FastImage from '@d11/react-native-fast-image';

interface PlanetListItemProps {
  planet: IPlanetModel;
  onPress?: () => void;
}

/**
 * Component that renders an individual planet item in the list
 * @param {IPlanetModel} planet - The planet data to display
 * @param {() => void} onPress - The function to call when the item is pressed
 * @returns {React.ReactNode} The rendered planet item
 */
export const PlanetListItem: React.FC<PlanetListItemProps> = ({
  planet,
  onPress,
}) => {
  const {colors} = useThemeStore();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.itemContainer,
        {backgroundColor: colors.backgroundPrimary},
      ]}>
      <View>
        <Text text={planet.name} size={20} fontWeight="bold" />
        <Text text={planet.type} size={16} color={colors.neutral700} />
      </View>
      <View style={styles.rightContainer}>
        <FastImage
          style={styles.image}
          source={{
            uri: planet.image || '',
            priority: FastImage.priority.high,
          }}
          resizeMode="cover"
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: normVSize(10),
    paddingHorizontal: normVSize(20),
    borderRadius: normVSize(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: normVSize(10),
  },
  rightContainer: {
    position: 'absolute',
    right: 0,
  },
  image: {
    width: normVSize(130),
    height: normVSize(130),
  },
});
