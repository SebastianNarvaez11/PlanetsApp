import {PlanetRepository} from '../../domain/repositories';

/**
 * Use case for retrieving all planets
 * @param {PlanetRepository} planetRepository - The repository instance for accessing planet data
 * @returns {Promise<Planet[]>} A promise that resolves to an array of planet data
 */
export const getPlanetsUseCase = (planetRepository: PlanetRepository) => {
  return planetRepository.getPlanets();
};
