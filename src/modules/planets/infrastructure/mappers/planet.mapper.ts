/**
 * Mapper class for transforming planet data between API responses and domain models
 * @class PlanetMapper
 *
 * @description
 * Provides static methods to map API response objects to domain model interfaces
 */
import {IGetPlanetByIdResponse, IGetPlanetsResponse} from '../interface';
import {IPlanetByIdModel, IPlanetModel} from '../../domain/models';

export class PlanetMapper {
  /**
   * Maps an array of planet API responses to domain models
   * @param response Array of planet data from API
   * @returns Array of mapped planet models
   */
  static fromGetPlanetsResponseToPlanetModel(
    response: IGetPlanetsResponse[],
  ): IPlanetModel[] {
    return response.map(planet => ({
      id: planet.id,
      name: planet.name,
      type: planet.type,
      image: planet.image,
    }));
  }

  /**
   * Maps a single planet API response to detailed planet model
   * @param response Planet detail data from API
   * @returns Mapped planet detail model
   */
  static fromGetPlanetByIdResponseToPlanetByIdModel(
    response: IGetPlanetByIdResponse,
  ): IPlanetByIdModel {
    return {
      id: response.id,
      name: response.name,
      type: response.type,
      diameterKm: response.diameter_km,
      distanceFromSunKm: response.distance_from_sun_km,
      moons: response.moons,
      image: response.image,
    };
  }
}
