import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Agregar } from "../pages/Agregar";
import { Home } from "../pages/Home";
import { Favoritos } from "../pages/Favoritos";
import { AppProvider } from "../context/AppContext";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agregar" element={<Agregar />} />
          <Route path="/agregar/:id" element={<Agregar />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}
