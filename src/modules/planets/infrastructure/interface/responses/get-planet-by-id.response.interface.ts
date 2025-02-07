export interface IGetPlanetByIdResponse {
  id: string;
  name: string;
  type: string;
  diameter_km: number;
  distance_from_sun_km: number;
  moons: number;
  image: string;
}
