import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Textos from "../pages/Textos";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/textos" element={<Textos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;