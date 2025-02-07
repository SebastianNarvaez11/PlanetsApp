import {mainApi} from '../../../../config/apis';
import {PlanetRepository} from '../../domain/repositories';
import {IGetPlanetByIdResponse, IGetPlanetsResponse} from '../interface';

/**
 * Implementation of the Planet Repository interface
 */
export class PlanetRepositoryImp implements PlanetRepository {
  /**
   * Fetches all planets with basic information
   * @returns Promise with array of planets data
   */
  async getPlanets() {
    return await mainApi.get<IGetPlanetsResponse[]>(
      '/rest/v1/planet?select=id,name,type,image',
    );
  }

  /**
   * Fetches detailed information for a specific planet
   * @param id - Planet identifier
   * @returns Promise with planet details
   */
  async getPlanetById(id: string) {
    return await mainApi.get<IGetPlanetByIdResponse[]>(
      `/rest/v1/planet?id=eq.${id}&select=*`,
    );
  }
}
