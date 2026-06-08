import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { Button } from "../ui/button";

export default function SearchBar({ variant }: { variant: "header" | "main" }) {
  const inputClass =
    variant === "main" ? "bg-white h-12" : "bg-(--surface-muted)";
  return (
    <div className="relative flex max-w-2xl gap-2">
      <label htmlFor="search" className="relative flex-1 cursor-pointer">
        <Search className="absolute top-1/2 left-3.5 size-4 -translate-y-1/2" />
        <Input
          id="search"
          placeholder="Search Pokémon..."
          className={`rounded-full ${inputClass} pl-10 focus-visible:ring-0`}
        />
      </label>

      {variant === "main" && (
        <Button className="absolute top-1/2 right-1.5 -translate-y-1/2 cursor-pointer rounded-full px-4 py-4.5 active:not-aria-[haspopup]:-translate-y-1/2">
          Search
        </Button>
      )}

      {variant === "header" && (
        <Button className="rounded-full px-3">Search</Button>
      )}
    </div>
  );
}
