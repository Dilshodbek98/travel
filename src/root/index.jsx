import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Attraction from "../components/Attraction/index";
import Navbar from "../components/Navbar/navbar";
import LanguageProvider from "../context/languageToggle/language";
import Home from "../pages/Home";
import { dataRoutes } from "../utils/dataRoutes";



const Root = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<Home />} />
            {dataRoutes.map((item) => (
              <Route key={item.id} path={item.path} element={item.element} />
            ))}
            <Route path="/attraction" element={<Attraction />} />
            <Route path="/attraction/:city" element={<Attraction />} />
            <Route path="*" element={<h2>404 error</h2>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default Root;
