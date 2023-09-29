import React from "react";
import data from "../Annonces.json";
//importation pour le banner
import imageAcceuil from "../images/ImageAcceuil.png";
import Banner from "../components/Banner";

//importation des vignette
import Cards from "../components/Cards";

function Home() {
  return (
    <section className="home">
      <Banner image={imageAcceuil} title="Chez vous, partout et ailleurs" />
      <Cards data={data} />
    </section>
  );
}

export default Home;
