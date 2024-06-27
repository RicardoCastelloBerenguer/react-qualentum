import React from "react";
import { useAppTheme } from "../../contexts/AppThemeContext";

function Footer() {
  const { theme } = useAppTheme();
  return (
    <footer
      className={`footer h-[100px]  text-white flex flex-col justify-center h-full ${
        theme === "light" ? "bg-[#333333]" : "bg-black"
      }`}
    >
      <header className="flex  justify-center gap-32 border-b p-3">
        <div className="contact flex flex-col">
          <span className="font-semibold mb-1">Contacto</span>
          <span>Email : info@mitienda.com</span>
          <span>Telefono : +34 123 456 789</span>
        </div>
        <div className="social flex flex-col">
          <span className="font-semibold mb-1">Redes Sociales</span>
          <span>Facebook</span>
          <span>Instagram</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold mb-1">Dirección</span>
          <span>Calle Principal ,123</span>
          <span>Ciudad, París</span>
        </div>
      </header>
      <span className="text-center p-2">
        @2024 MiTienda.Todos los derechos reservados
      </span>
    </footer>
  );
}

export default Footer;
