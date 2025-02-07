export interface IPlanetModel {
  id: string;
  name: string;
  type: string;
  image: string;
}

export interface IPlanetByIdModel {
  id: string;
  name: string;
  type: string;
  diameterKm: number;
  distanceFromSunKm: number;
  moons: number;
  image: string;
}
