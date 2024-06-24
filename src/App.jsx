import { useState } from "react";
import Header from "./components/header/Header";
import ClothCard from "./components/ClothCard/ClothCard";
import Footer from "./components/Footer/Footer";
import productsData from "../data.json";

function App() {
  const [filter, setFilter] = useState("");

  const filterProducts = (newFilter) => {
    setFilter(newFilter);
    console.log(newFilter);
  };

  return (
    <>
      <Header onChangeFilter={filterProducts} />
      <div
        id="card-cloth-container"
        className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 space-x-8 my-6"
      >
        {productsData
          .filter((product) =>
            product.title.toLowerCase().includes(filter.toLowerCase())
          )
          .map((product) => (
            <ClothCard key={product.id} clothProduct={product} />
          ))}
      </div>

      <Footer />
    </>
  );
}

export default App;
