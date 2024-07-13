import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

// COMPONENTS
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

// PROVIDERS
import { CarritoProvider } from "../contexts/CarritoContext";
import { AppThemeProvider } from "../contexts/AppThemeContext";
import { UserProvider } from "../contexts/UserAuthContext";
import { FilterClothProvider } from "../contexts/FilterClothContext";

const MainLayout = () => {
  return (
    <>
      <UserProvider>
        <CarritoProvider>
          <FilterClothProvider>
            <AppThemeProvider>
              <Header />
              <Outlet />

              <Footer />
            </AppThemeProvider>
          </FilterClothProvider>
        </CarritoProvider>
      </UserProvider>
    </>
  );
};

export default MainLayout;
