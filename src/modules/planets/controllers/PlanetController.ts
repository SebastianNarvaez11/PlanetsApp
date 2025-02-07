
import {Alert} from 'react-native';
import {PlanetRepositoryImp} from '../infrastructure/repositories-imp';
import {getPlanetsController} from './get-planets.controller';
import {getPlanetByIdController} from './get-planet-by-id.controller';
import {IPlanetByIdModel, IPlanetModel} from '../domain/models';

/**
 * Controller class for handling planet-related operations
 * @class PlanetController
 */
export class PlanetController {
  private static planetRepository = new PlanetRepositoryImp();

  /**
   * Fetches all planets
   * @returns Promise resolving to array of planet models
   */
  static async getPlanets(): Promise<IPlanetModel[]> {
    const response = await getPlanetsController(this.planetRepository);

    if (response.error) {
      Alert.alert(
        'Ocurrió un error al obtener los planetas',
        `${response.error} - status code: ${response.statusCode}`,
      );
    }
    return response.data || [];
  }

  /**
   * Fetches a specific planet by ID
   * @param id - Planet identifier
   * @returns Promise resolving to planet details or null
   */
  static async getPlanetById(id: string): Promise<IPlanetByIdModel | null> {
    const response = await getPlanetByIdController(this.planetRepository, id);

    if (response.error) {
      Alert.alert('Ocurrió un error al obtener el planeta', response.error);
    }

    return response.data;
  }
}
