import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Provider from "../pages/Provider";
import Overview from "../pages/Overview";
import Warehousing from "../pages/Warehousing";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tongquan" element={<Overview />} />
      <Route path="/nhacungcap" element={<Provider />} />
      <Route path="/nhapkho" element={<Warehousing />} />
    </Routes>
  );
};

export default AppRouter;
