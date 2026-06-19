import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Textos from "../pages/Textos";
import Podcast from "../pages/Podcast";
import Imagenes from "../pages/Imagenes";
import Videos from "../pages/Videos";
import EspacioWeb from "../pages/EspacioWeb";
import Laboratorio from "../pages/Laboratorio";

function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/textos" element={<Textos />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/imagenes" element={<Imagenes />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/espacio-web" element={<EspacioWeb />} />
          <Route path="/laboratorio" element={<Laboratorio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;