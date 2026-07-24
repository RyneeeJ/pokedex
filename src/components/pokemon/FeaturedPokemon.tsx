import { Badge } from "../ui/badge";

type Pokemon = {
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
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
  image: string;
};

export default function FeaturedPokemon({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div className="border-border mx-auto flex max-w-5xl rounded-lg border">
      <div className="aspect-square w-2/5">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex-1 space-y-8 bg-white p-8">
        <div className="space-y-2">
          {/* ID */}
          <span className="mb-1 text-[#855300]">
            #{pokemon.id.toString().padStart(3, "0")}
          </span>
          {/* Name */}
          <div className="text-2xl font-bold">{pokemon.name}</div>
          {/* Types */}
          <div className="flex gap-2">
            {pokemon.types.map((type) => (
              <Badge
                style={{ backgroundColor: `var(--type-${type.toLowerCase()})` }}
                className="px-3 py-2.5"
                key={type}
              >
                {type.toUpperCase()}
              </Badge>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="border-border flex gap-12 border-t border-b py-4">
          <div className="flex flex-col items-start">
            <span className="text-xs font-semibold text-[#855300] uppercase">
              Height
            </span>
            <span className="font-semibold">{pokemon.height} m</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-xs font-semibold text-[#855300] uppercase">
              Weight
            </span>
            <span className="font-semibold">{pokemon.weight} kg</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-xs font-semibold text-[#855300] uppercase">
              Abilities
            </span>
            <span className="font-semibold">
              {pokemon.abilities.join(", ")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
