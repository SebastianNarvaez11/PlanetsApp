import {useQuery} from '@tanstack/react-query';
import {PlanetController} from '../../controllers';

/**
 * Custom hook for fetching planet details by ID
 * @hook useGetPlanetById
 * @param {string} id - The ID of the planet to fetch
 * @returns {Object} Object containing loading state and planet data
 */
export const useGetPlanetById = (id: string) => {
  const {isLoading, data} = useQuery({
    queryKey: ['planet_by_id', id],
    staleTime: 1000 * 60 * 60, // 1 hour
    enabled: !!id,
    retry: false,
    queryFn: async () => await PlanetController.getPlanetById(id),
  });

  return {isLoading, data};
};
