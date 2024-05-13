// NavRoutes.js
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import CreateMeals from "./createMeals";
import Search from "./search";
import Home from "./home";
import Preferences from "./preferences";

function NavRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/preferences" element={<Preferences />} />
      <Route path="/createmeals" element={<CreateMeals />} />
      <Route path="/foodlookup" element={<Search />} />
    </Routes>
  );
}

export default NavRoutes;
