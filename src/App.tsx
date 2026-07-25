import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import SearchBar from "./components/search/SearchBar";
import DashboardTitle from "./components/layout/DashboardTitle";
import FeaturedPokemon from "./components/pokemon/FeaturedPokemon";
import { useEffect } from "react";
import PopularPokemons from "./components/pokemon/PopularPokemons";

const dummyPokemon = {
  name: "Pikachu",
  id: 25,
  types: ["Electric"],
  height: 0.4,
  weight: 6.0,
  abilities: ["Static", "Lightning Rod"],
  baseStats: {
    hp: 35,
    attack: 55,
    defense: 40,
    specialAttack: 50,
    specialDefense: 50,
    speed: 90,
  },
  image:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
};

export default function App() {
  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const data = await response.json();
      console.log(data);
    };
    fetchPokemon();
  }, []);

  return (
    <div className="mx-auto flex min-h-screen max-w-(--container-width) flex-col text-(--text-primary)">
      <Header />
      <main className="flex-1 space-y-10 px-6 py-10">
        <div className="flex flex-col items-center gap-6 text-center">
          <DashboardTitle />
          <SearchBar variant="main" />
        </div>
        <FeaturedPokemon pokemon={dummyPokemon} />
        <PopularPokemons />
      </main>
      <Footer />
    </div>
  );
}
