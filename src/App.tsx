import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="mx-auto flex min-h-screen max-w-(--container-width) flex-col">
      <Header />
      <main className="flex-1">hello world</main>
      <Footer />
    </div>
  );
}
