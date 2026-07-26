import type { PokemonApiResponse } from "../types/pokemon";

export async function fetchPokemon(query: string): Promise<PokemonApiResponse> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);

  if (!response.ok) throw new Error("Failed to fetch pokemon");

  return response.json();
}
