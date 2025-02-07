import React, {FC} from 'react';
import {View, Button} from 'react-native';
import {
  ScreenLayout,
  Text,
} from '../../../../../common/presentation/components';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../../../../common/presentation/navigation';
import FastImage from '@d11/react-native-fast-image';
import {Spinner} from '../../../../../common/presentation/components/atoms/Spinner';
import {useThemeStore} from '../../../../../common/store';
import {InfoRow} from '../../components';
import {useGetPlanetById} from '../../hooks';
import {useFavoritePlanets} from '../../hooks/useFavoritePlanets';
import {styles} from './styles';

interface Props extends StackScreenProps<RootStackParams, 'PlanetDetail'> {}

/**
 * Screen component that displays detailed information about a planet
 * @component PlanetDetailScreen
 * @param {Props} props - Component props containing route params with planet id
 * @returns {JSX.Element} Planet detail screen with image, info and favorite button
 */
export const PlanetDetailScreen: FC<Props> = ({route}) => {
  const {id} = route.params;
  const {colors} = useThemeStore();

  const {data, isLoading} = useGetPlanetById(id);
  const {addFavorite, removeFavorite, isFavorite} = useFavoritePlanets();

  const handleToggleFavorite = async () => {
    if (!data) {
      return;
    }

    if (isFavorite(data.id)) {
      await removeFavorite(data.id);
    } else {
      await addFavorite(data);
    }
  };

  if (isLoading) {
    return (
      <ScreenLayout>
        <Spinner size="large" />
      </ScreenLayout>
    );
  }

  return (
    <ScreenLayout>
      <FastImage
        style={styles.image}
        source={{
          uri: data?.image || '',
          priority: FastImage.priority.high,
        }}
        resizeMode="contain"
      />

      <View
        style={[
          styles.infoContainer,
          {backgroundColor: colors.backgroundPrimary},
        ]}>
        <Text text={data?.name} size={28} fontWeight="bold" />
        <Text text={data?.type} size={20} color={colors.neutral700} />

        <View style={styles.detailsContainer}>
          <InfoRow label="Diámetro" value={`${data?.diameterKm} km`} />
          <InfoRow
            label="Distancia al Sol"
            value={`${data?.distanceFromSunKm} km`}
          />
        </View>

        {data && (
          <Button
            title={
              isFavorite(data.id)
                ? 'Eliminar de favoritos'
                : 'Agregar a favoritos'
            }
            onPress={handleToggleFavorite}
            color={isFavorite(data.id) ? colors.error : colors.primary}
          />
        )}
      </View>
    </ScreenLayout>
  );
};
