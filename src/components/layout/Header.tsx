import SearchBar from "../search/SearchBar";

export default function Header() {
  return (
    <div className="bg-surface bg-background fixed top-0 right-0 left-0 z-10 flex min-h-16 items-center justify-between border-b border-(--border-light) px-6 shadow-xs">
      <a href="/" className="text-primary text-2xl font-bold">
        Pokèdex
      </a>

      <div className="w-full max-w-75">
        <SearchBar variant="header" />
      </div>
    </div>
  );
}
