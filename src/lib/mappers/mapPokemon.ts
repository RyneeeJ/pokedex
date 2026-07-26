import type { Pokemon, PokemonApiResponse } from "../types/pokemon";

export function mapPokemonApiToPokemon(
  pokemonApiResponse: PokemonApiResponse,
): Pokemon {
  const {
    id,
    name,
    height,
    weight,
    sprites: { front_default: image },
    types: typesArr,
    abilities: abilitiesArr,
    stats,
  } = pokemonApiResponse;
  return {
    id,
    name,
    height,
    weight,
    image,
    types: typesArr.map((typeItem) => typeItem.type.name),
    abilities: abilitiesArr.map((abilityItem) => abilityItem.ability.name),
    baseStats: stats.reduce(
      (acc, statItem) => {
        return {
          ...acc,
          [statItem.stat.name.split("-").join("")]: statItem.base_stat,
        };
      },
      {
        hp: 0,
        attack: 0,
        defense: 0,
        specialattack: 0,
        specialdefense: 0,
        speed: 0,
      },
    ),
  };
}
