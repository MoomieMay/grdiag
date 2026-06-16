import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Textos from "../pages/Textos";
import Imagenes from "../pages/Imagenes";
import Podcast from "../pages/Podcast";
import Videos from "../pages/Videos";
import Chatbots from "../pages/Chatbots";
import Nosotros from "../pages/Nosotros";

import MainLayout from "../layouts/MainLayout";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />

          <Route path="/textos" element={<Textos />} />

          <Route path="/imagenes" element={<Imagenes />} />

          <Route path="/podcast" element={<Podcast />} />

          <Route path="/videos" element={<Videos />} />

          <Route path="/chatbots" element={<Chatbots />} />

          <Route path="/nosotros" element={<Nosotros />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;