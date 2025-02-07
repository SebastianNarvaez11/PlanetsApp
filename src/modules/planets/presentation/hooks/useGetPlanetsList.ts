import {useQuery} from '@tanstack/react-query';
import {PlanetController} from '../../controllers';
import {useState, useMemo} from 'react';

type SortOrder = 'asc' | 'desc';

/**
 * Custom hook for fetching and managing planets list
 * @hook useGetPlanetsList
 */
export const useGetPlanetsList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  const {isLoading, data} = useQuery({
    queryKey: ['planets'],
    staleTime: 1000 * 60 * 60, // 1 hour
    retry: false,
    queryFn: () => PlanetController.getPlanets(),
  });

  /**
   * Sorts and filters the planets data based on search query and sort order
   * @returns {Array} Sorted and filtered planets data
   */
  const sortedAndFilteredPlanets = useMemo(() => {
    if (!data) {
      return [];
    }

    let filteredData = data;

    if (searchQuery.trim()) {
      filteredData = data.filter(planet =>
        planet.name.toLowerCase().includes(searchQuery.toLowerCase().trim()),
      );
    }

    return [...filteredData].sort((a, b) => {
      const comparison = a.name.localeCompare(b.name);
      return sortOrder === 'asc' ? comparison : -comparison;
    });
  }, [data, searchQuery, sortOrder]);

  return {
    isLoading,
    data: sortedAndFilteredPlanets,
    searchQuery,
    setSearchQuery,
    sortOrder,
    setSortOrder,
  };
};
