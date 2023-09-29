import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import data from "../Annonces.json";

// Importation des components
import Slideshow from "../components/Slideshow";
import Tags from "../components/Tag";
import Host from "../components/Host";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";

function Logement() {
  const { id } = useParams(); // Obtenez l'ID de l'URL

  const [annonce, setAnnonce] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Recherchez l'annonce correspondante dans le tableau JSON en fonction de l'ID
    const annonceTrouvee = data.find((item) => item.id === id);
    setAnnonce(annonceTrouvee); // Définissez l'annonce dans l'état local

    if (!annonceTrouvee) {
      navigate(`Pas_trouve`);
    }
  }, [id, navigate]);

  if (!annonce) {
    return null;
  }

  return (
    <section className="logement" key={annonce.id}>
      <Slideshow images={annonce.pictures} />
      <div className="row">
        <div>
          <h1>{annonce.title}</h1>
          <span>{annonce.location}</span>
          <Tags elements={annonce.tags} />
        </div>
        <div className="hostRating">
          <Host name={annonce.host.name} picture={annonce.host.picture} />
          <Rating rating={annonce.rating} />
        </div>
      </div>
      <div className="row">
        <Collapse title="Description" description={annonce.description} />
        <Collapse title="Equipement" description={annonce.equipments} />
      </div>
    </section>
  );
}

export default Logement;
