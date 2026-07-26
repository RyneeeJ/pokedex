import { useSearchParams } from "react-router";
import FeaturedPokemon from "../pokemon/FeaturedPokemon";
import PopularPokemons from "../pokemon/PopularPokemons";
import SearchBar from "../search/SearchBar";
import DashboardTitle from "./DashboardTitle";
import usePokemon from "@/lib/hooks/usePokemon";
import { mapPokemonApiToPokemon } from "@/lib/mappers/mapPokemon";

export default function MainWindow() {
  const [searchParams] = useSearchParams();
  const pokemon = searchParams.get("pokemon");

  const { pokemonData, isLoading, error } = usePokemon(pokemon ?? "");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!pokemonData) return <div>No pokemon data found</div>;
  const featuredPokemonData = mapPokemonApiToPokemon(pokemonData);

  return (
    <main className="flex-1 space-y-10 px-6 py-10 pt-24">
      <div className="flex flex-col items-center gap-6 text-center">
        <DashboardTitle />
        <SearchBar variant="main" />
      </div>
      <FeaturedPokemon pokemon={featuredPokemonData} />
      <PopularPokemons />
    </main>
  );
}
