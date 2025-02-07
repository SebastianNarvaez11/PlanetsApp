import React from 'react';
import {useWindowDimensions, View} from 'react-native';
import {
  ScreenLayout,
  Text,
  Spinner,
} from '../../../../../common/presentation/components';
import {FlashList} from '@shopify/flash-list';
import {normVSize} from '../../../../../config/constants';
import {ListEmpty, ListSeparator} from '../../components/ListComponents';
import {PlanetListItem} from '../../components/PlanetListItem';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../../../../../common/presentation/navigation';
import {useFavoritePlanets} from '../../hooks/useFavoritePlanets';
import {styles} from './styles';

export const FavoritesPlantesScreen = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  const {favorites, isLoading} = useFavoritePlanets();

  return (
    <ScreenLayout withScroll={false}>
      <View style={styles.headerContainer}>
        <Text text="Favoritos" size={40} align="center" fontWeight="bold" />
      </View>

      <View style={styles.container}>
        <View style={[{height: height * 0.7}]}>
          {isLoading ? (
            <Spinner size="large" />
          ) : (
            <FlashList
              contentContainerStyle={{paddingVertical: normVSize(40)}}
              showsVerticalScrollIndicator={false}
              data={favorites}
              fadingEdgeLength={normVSize(30)}
              estimatedItemSize={normVSize(65)}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => `${item.id}-${index}`}
              renderItem={({item}) => (
                <PlanetListItem
                  planet={item}
                  onPress={() =>
                    navigation.navigate('PlanetDetail', {id: item.id})
                  }
                />
              )}
              ItemSeparatorComponent={ListSeparator}
              ListEmptyComponent={!isLoading ? <ListEmpty /> : null}
            />
          )}
        </View>
      </View>
    </ScreenLayout>
  );
};
