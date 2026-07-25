import SearchBar from "../search/SearchBar";

export default function Header() {
  return (
    <div className="flex min-h-16 items-center justify-between border-b border-(--border-light) px-6 shadow-xs">
      <a href="/" className="text-primary text-2xl font-bold">
        Pokèdex
      </a>

      <div className="w-full max-w-75">
        <SearchBar variant="header" />
      </div>
    </div>
  );
}
