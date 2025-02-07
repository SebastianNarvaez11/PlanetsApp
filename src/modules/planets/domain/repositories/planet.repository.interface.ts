import {AxiosResponse} from 'axios';
import {
  IGetPlanetByIdResponse,
  IGetPlanetsResponse,
} from '../../infrastructure/interface';

/**
 * Repository interface for handling planet data operations
 * @interface PlanetRepository
 */
export interface PlanetRepository {
  /**
   * Retrieves all planets
   * @returns Promise with array of planets data
   */
  getPlanets(): Promise<AxiosResponse<IGetPlanetsResponse[]>>;

  /**
   * Retrieves a specific planet by ID
   * @param id - Planet identifier
   * @returns Promise with planet data
   */
  getPlanetById(id: string): Promise<AxiosResponse<IGetPlanetByIdResponse[]>>;
}
