import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;