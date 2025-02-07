import {useCallback, useState} from 'react';
import {StorageAdapter} from '../../../../config/adapters';
import {IPlanetByIdModel} from '../../domain/models';
import {useFocusEffect} from '@react-navigation/native';

const STORAGE_KEY = 'FAV_PLANETS';

/**
 * Custom hook for managing favorite planets functionality
 * @hook useFavoritePlanets
 */
export const useFavoritePlanets = () => {
  const [favorites, setFavorites] = useState<IPlanetByIdModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Retrieves favorite planets from local storage
   * @returns {Promise<void>}
   */
  const getFavorites = useCallback(async () => {
    try {
      const storedFavorites = await StorageAdapter.getItem(STORAGE_KEY);
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error('Error getting favorites:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Adds a planet to favorites
   * @param {IPlanetByIdModel} planet - The planet to add to favorites
   * @returns {Promise<boolean>} True if successful, false otherwise
   */
  const addFavorite = useCallback(
    async (planet: IPlanetByIdModel) => {
      try {
        const updatedFavorites = [...favorites, planet];
        await StorageAdapter.setItem(
          STORAGE_KEY,
          JSON.stringify(updatedFavorites),
        );
        setFavorites(updatedFavorites);
        return true;
      } catch (error) {
        console.error('Error adding favorite:', error);
        return false;
      }
    },
    [favorites],
  );

  /**
   * Removes a planet from favorites
   * @param {string} planetId - The ID of the planet to remove
   * @returns {Promise<boolean>} True if successful, false otherwise
   */
  const removeFavorite = useCallback(
    async (planetId: string) => {
      try {
        const updatedFavorites = favorites.filter(
          planet => planet.id !== planetId,
        );
        await StorageAdapter.setItem(
          STORAGE_KEY,
          JSON.stringify(updatedFavorites),
        );
        setFavorites(updatedFavorites);
        return true;
      } catch (error) {
        console.error('Error removing favorite:', error);
        return false;
      }
    },
    [favorites],
  );

  /**
   * Checks if a planet is in favorites
   * @param {string} planetId - The ID of the planet to check
   * @returns {boolean} True if the planet is in favorites, false otherwise
   */
  const isFavorite = useCallback(
    (planetId: string) => {
      return favorites.some(planet => planet.id === planetId);
    },
    [favorites],
  );

  useFocusEffect(
    useCallback(() => {
      getFavorites();
    }, [getFavorites]),
  );

  return {
    favorites,
    isLoading,
    addFavorite,
    removeFavorite,
    isFavorite,
    getFavorites,
  };
};
