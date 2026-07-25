import PokemonBasicCard from "./PokemonBasicCard";

const dummyPokemonList = [
  {
    id: 1,
    name: "Bulbasaur",
    types: ["Grass", "Poison"],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  {
    id: 2,
    name: "Squirtle",
    types: ["Water"],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  },
  {
    id: 3,
    name: "Pikachu",
    types: ["Electric"],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  },
  {
    id: 4,
    name: "Charizard",
    types: ["Fire", "Flying"],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
  },
  {
    id: 5,
    name: "Gengar",
    types: ["Ghost", "Poison"],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
  },
  {
    id: 6,
    name: "Mewtwo",
    types: ["Psychic"],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
  },
  {
    id: 7,
    name: "Mew",
    types: ["Psychic"],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
  },
];

export default function PopularPokemons() {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-[repeat(auto-fill,minmax(min(100%,11rem),1fr))] gap-4">
      {dummyPokemonList.map((pokemon) => (
        <PokemonBasicCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}
