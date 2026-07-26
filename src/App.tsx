import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MainWindow from "./components/layout/MainWindow";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

function AppContent() {
  return (
    <div className="mx-auto flex min-h-screen max-w-(--container-width) flex-col text-(--text-primary)">
      <Header />
      <MainWindow />
      <Footer />
    </div>
  );
}
