import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { useSearchParams } from "react-router";

export default function SearchBar({ variant }: { variant: "header" | "main" }) {
  const [, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const inputClass =
    variant === "main" ? "bg-white h-13" : "bg-(--surface-muted)";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handleSearch = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search.trim() === "") return;
    setSearchParams({ pokemon: search.trim() });
  };

  return (
    <div className="w-full max-w-2xl">
      <form onSubmit={handleSearch} className="relative flex w-full gap-2">
        <label htmlFor="search" className="relative flex-1 cursor-pointer">
          <Search className="absolute top-1/2 left-3.5 size-4 -translate-y-1/2" />
          <Input
            id="search"
            placeholder="Search Pokémon..."
            className={`rounded-full ${inputClass} pl-10 focus-visible:ring-0`}
            value={search}
            onChange={handleInputChange}
          />
        </label>

        {variant === "main" && (
          <Button
            className="absolute top-1/2 right-1.5 -translate-y-1/2 cursor-pointer rounded-full px-6 py-5 active:not-aria-[haspopup]:-translate-y-1/2"
            type="submit"
          >
            Search
          </Button>
        )}

        {variant === "header" && (
          <Button className="rounded-full px-3" type="submit">
            Search
          </Button>
        )}
      </form>
    </div>
  );
}
