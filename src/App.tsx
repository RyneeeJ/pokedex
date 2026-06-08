import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import SearchBar from "./components/search/SearchBar";
import DashboardTitle from "./components/layout/DashboardTitle";

export default function App() {
  return (
    <div className="mx-auto flex min-h-screen max-w-(--container-width) flex-col text-(--text-primary)">
      <Header />
      <main className="flex-1 px-6 py-10">
        <div className="flex flex-col items-center gap-6 text-center">
          <DashboardTitle />
          <SearchBar variant="main" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
