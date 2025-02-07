import {AxiosError} from 'axios';
import {IApiResponse, makeResponse} from '../../../config/errors';
import {getPlanetByIdUseCase} from '../application/usecases';
import {PlanetRepository} from '../domain/repositories';
import {PlanetMapper} from '../infrastructure/mappers';
import {IPlanetByIdModel} from '../domain/models';

/**
 * Controller for retrieving a planet by its ID
 * @param {PlanetRepository} repository - Repository instance for accessing planet data
 * @param {string} id - Unique identifier of the planet to retrieve
 * @returns {Promise<IApiResponse<IPlanetByIdModel | null>>} API response containing planet data or error
 *
 * @example
 * const response = await getPlanetByIdController(planetRepo, "123");
 */
export const getPlanetByIdController = async (
  repository: PlanetRepository,
  id: string,
): Promise<IApiResponse<IPlanetByIdModel | null>> => {
  try {
    const response = await getPlanetByIdUseCase(repository, id);

    return makeResponse(
      PlanetMapper.fromGetPlanetByIdResponseToPlanetByIdModel(
        response.data[0],
      ) || null,
      null,
      response.status,
    );
  } catch (error) {
    const axiosError = error as AxiosError;
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    return makeResponse(null, errorMessage, axiosError.response?.status || 500);
  }
};
