import PokemonBasicDetails from "./PokemonBasicDetails";
import FeaturedPokemonBaseStats from "./FeaturedPokemonBaseStats";
import PokemonPhysicalAttributes from "./PokemonPhysicalAttributes";
import type { Pokemon } from "@/lib/types/pokemon";

export default function FeaturedPokemon({ pokemon }: { pokemon: Pokemon }) {
  const baseDetails = {
    id: pokemon.id,
    name: pokemon.name,
    types: pokemon.types,
  };

  return (
    <div className="border-border mx-auto flex max-w-5xl rounded-lg border">
      <div className="aspect-square w-2/5">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex-1 space-y-6 bg-white p-8">
        <PokemonBasicDetails baseDetails={baseDetails} size="lg" />

        {/* Physical Attributes */}
        <div className="border-border flex gap-12 border-t border-b py-4">
          <PokemonPhysicalAttributes
            attribute="Height"
            value={pokemon.height.toString()}
          />
          <PokemonPhysicalAttributes
            attribute="Weight"
            value={pokemon.weight.toString()}
          />
          <PokemonPhysicalAttributes
            attribute="Abilities"
            value={pokemon.abilities}
          />
        </div>

        {/* Base stats */}
        <FeaturedPokemonBaseStats baseStats={pokemon.baseStats} />
      </div>
    </div>
  );
}
