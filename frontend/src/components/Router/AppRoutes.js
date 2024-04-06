import React from "react";
import { Routes, Route } from 'react-router-dom';
import { allRoute } from "./route";
import { About, Home } from '../../pages';

function AppRoutes() {
  return (
    <Routes>
        <Route path={allRoute.ROOT} element={<Home />} />
        <Route path={allRoute.ABOUT} element={<About />} />
    </Routes>
  );
}

export default AppRoutes;
