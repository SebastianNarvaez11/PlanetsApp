import {AxiosError} from 'axios';
import {IApiResponse, makeResponse} from '../../../config/errors';
import {getPlanetsUseCase} from '../application/usecases';
import {PlanetRepository} from '../domain/repositories';
import {PlanetMapper} from '../infrastructure/mappers';
import {IPlanetModel} from '../domain/models';

/**
 * Controller for retrieving all planets
 * @param {PlanetRepository} repository - Repository instance for accessing planet data
 * @returns {Promise<IApiResponse<IPlanetModel[]>>} API response containing array of planet data or error
 *
 * @example
 * const response = await getPlanetsController(planetRepo);
 */
export const getPlanetsController = async (
  repository: PlanetRepository,
): Promise<IApiResponse<IPlanetModel[]>> => {
  try {
    const response = await getPlanetsUseCase(repository);

    return makeResponse(
      PlanetMapper.fromGetPlanetsResponseToPlanetModel(response.data),
      null,
      response.status,
    );
  } catch (error) {
    const axiosError = error as AxiosError;
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    return makeResponse([], errorMessage, axiosError.response?.status || 500);
  }
};
