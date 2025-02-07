import React from 'react';
import {StyleSheet, useWindowDimensions, View} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import {normVSize} from '../../../../config/constants';
import {useGetPlanetsList} from '../hooks/useGetPlanetsList';
import {ListSeparator, ListEmpty} from './ListComponents';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../../../../common/presentation/navigation';
import {PlanetListItem} from './PlanetListItem';
import {Spinner} from '../../../../common/presentation/components/atoms/Spinner';
import {SearchInput} from '../../../../common/presentation/components/atoms/SearchInput';
import {SortButtons} from '../../../../common/presentation/components/atoms/SortButtons';

/**
 * Main component for displaying the list of planets with search and sort functionality
 * @component PlanetList
 * Renders a searchable and sortable list of planets using FlashList for performance.
 * Includes search input, sort buttons, and loading states.
 */
export const PlanetList = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  const {
    isLoading,
    data,
    searchQuery,
    setSearchQuery,
    sortOrder,
    setSortOrder,
  } = useGetPlanetsList();

  return (
    <View style={styles.container}>
      <SearchInput
        placeholder="Buscar planeta..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        containerStyle={styles.searchContainer}
      />

      <SortButtons
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
        containerStyle={styles.sortContainer}
      />

      <View style={[{height: height * 0.7}]}>
        {isLoading ? (
          <Spinner size="large" />
        ) : (
          <FlashList
            contentContainerStyle={{
              paddingTop: normVSize(40),
              paddingBottom: normVSize(120),
            }}
            showsVerticalScrollIndicator={false}
            data={data || []}
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
            ListEmptyComponent={!isLoading ? ListEmpty : null}
          />
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: normVSize(20),
  },
  searchContainer: {
    paddingHorizontal: normVSize(20),
  },
  sortContainer: {
    paddingHorizontal: normVSize(20),
  },
});
