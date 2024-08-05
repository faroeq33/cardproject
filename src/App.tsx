import ProductCard from "./components/ProductCard";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <>
      <main className="flex items-center justify-center h-screen p-3">
        <div className="cardwrapper max-w-[600px]">
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <ProductCard />
          </ThemeProvider>
        </div>
      </main>
    </>
  );
}

export default App;
