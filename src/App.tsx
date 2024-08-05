import ProductCard from "./components/ProductCard";

function App() {
  return (
    <>
      <main className="flex items-center justify-center h-screen p-3 ">
        <div className="cardwrapper max-w-[987px]">
          <ProductCard />
        </div>
      </main>
    </>
  );
}

export default App;
