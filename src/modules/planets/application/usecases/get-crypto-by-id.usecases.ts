import {PlanetRepository} from '../../domain/repositories';

/**
 * Use case for retrieving a specific planet by its ID
 * @param {PlanetRepository} planetRepository - The repository instance for accessing planet data
 * @param {string} id - The unique identifier of the planet to retrieve
 * @returns {Promise<Planet>} A promise that resolves to the planet data
 */
export const getPlanetByIdUseCase = (
  planetRepository: PlanetRepository,
  id: string,
) => {
  return planetRepository.getPlanetById(id);
};
