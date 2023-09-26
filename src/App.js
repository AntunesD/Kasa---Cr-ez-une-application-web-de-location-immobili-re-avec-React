

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
        <Routes>
          <Route
            element={
              <Layout>
                <Home />
              </Layout>
            }
            path="/"
            exact
          />
          <Route
            element={
              <Layout>
                <About />
              </Layout>
            }
            path="/about"
          />
          <Route
            element={
              <Layout>
                <Logement />
              </Layout>
            }
            path="/logement/:id"
          />
          <Route
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
            path="*"
          />

          {/* Route pour github pages */}
          <Route
            element={
              <Layout>
                <Home />
              </Layout>
            }
            path="/Kasa_-_Creez_une_application_web_de_location_immobiliere_avec_React/"
          />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
