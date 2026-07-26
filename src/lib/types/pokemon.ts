export type Pokemon = {
  name: string;
  id: number;
  types: string[];
  height: number;
  weight: number;
  abilities: string[];
  baseStats: {
    hp: number;
    attack: number;
    defense: number;
    specialattack: number;
    specialdefense: number;
    speed: number;
  };
  image: string;
};

export type BaseStats = {
  hp: number;
  attack: number;
  defense: number;
  specialattack: number;
  specialdefense: number;
  speed: number;
};

export type PokemonApiResponse = {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  types: { type: { name: string } }[];
  abilities: { ability: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
};
