import { useQuery } from "@tanstack/react-query";
import { fetchPokemon } from "../services/fetchPokemon";

export default function usePokemon(query: string) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["pokemon", query],
    queryFn: () => fetchPokemon(query),
    enabled: Boolean(query),
  });

  return { pokemonData: data, isLoading, error };
}
