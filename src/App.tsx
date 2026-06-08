import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import SearchBar from "./components/search/SearchBar";

export default function App() {
  return (
    <div className="mx-auto flex min-h-screen max-w-(--container-width) flex-col text-(--text-primary)">
      <Header />
      <main className="flex-1 px-6 py-8">
        <SearchBar variant="main" />
      </main>
      <Footer />
    </div>
  );
}
