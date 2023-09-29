//Importation des ressource pour le routing
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//importation de fichier pour le routing
import Layout from "./pages/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./pages/Logement";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      {/*Préparation des routes*/}
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route element={<Home />} path="/" exact />
            <Route element={<About />} path="/about" />
            <Route element={<Logement />} path="/logement/:id" />
            <Route element={<NotFound />} path="*" />

            {/* Route pour github pages */}
            <Route
              element={<Home />}
              path="/Kasa_-_Creez_une_application_web_de_location_immobiliere_avec_React/"
            />
          </Routes>
        </Layout>
      </BrowserRouter>
      ;
    </div>
  );
}

export default App;
