import PokemonBasicDetails from "./PokemonBasicDetails";

export default function PokemonBasicCard({
  pokemon,
}: {
  pokemon: { id: number; name: string; types: string[]; image: string };
}) {
  const baseDetails = {
    id: pokemon.id,
    name: pokemon.name,
    types: pokemon.types,
  };
  return (
    <div className="w-full space-y-3 rounded-lg border border-gray-200 bg-white p-4">
      <div className="flex aspect-square w-full items-center justify-center rounded-sm border border-gray-200 bg-(--footer-bg)">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="h-full w-full object-cover"
        />
      </div>
      <PokemonBasicDetails baseDetails={baseDetails} />
    </div>
  );
}
