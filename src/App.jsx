import { useState } from "react";

// COMPONENTS
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ClothContainer from "./components/ClothContainer/ClothContainer";
import AuthForm from "./components/AuthForm/AuthForm";
import CartContainer from "./components/CartContainer/CartContainer";

// PROVIDERS
import { CarritoProvider } from "./contexts/CarritoContext";
import { AppThemeProvider } from "./contexts/AppThemeContext";
import { UserProvider } from "./contexts/UserAuthContext";

function App() {
  const [filter, setFilter] = useState("");
  const [showCart, setShowCart] = useState(false);

  const filterProducts = (newFilter) => {
    setFilter(newFilter);
    console.log(newFilter);
  };
  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <CarritoProvider>
        <UserProvider>
          <AppThemeProvider>
            <Header onToggleCart={toggleCart} onChangeFilter={filterProducts} />
            {showCart ? <CartContainer /> : <ClothContainer filter={filter} />}

            <AuthForm />
            <Footer />
          </AppThemeProvider>
        </UserProvider>
      </CarritoProvider>
    </>
  );
}

export default App;
