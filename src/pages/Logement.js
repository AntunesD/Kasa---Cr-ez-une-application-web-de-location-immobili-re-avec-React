import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Importez useParams
import data from "../Annonces.json";
import NotFound from "./NotFound";

// Importation des components
import Collapse from "../components/Collapse";
import Slideshow from "../components/Slideshow";
import Tags from "../components/Tag";
import Host from "../components/Host";
import Rating from "../components/Rating";

function Logement() {
  const { id } = useParams(); // Obtenez l'ID de l'URL

  const [annonce, setAnnonce] = useState(null);

  useEffect(() => {
    // Recherchez l'annonce correspondante dans le tableau JSON en fonction de l'ID
    const annonceTrouvee = data.find((item) => item.id === id);
    setAnnonce(annonceTrouvee); // Définissez l'annonce dans l'état local
  }, [id]);

  return (
    <section >
      {annonce ? ( // Vérifiez si l'annonce a été trouvée avant de l'afficher
        <article className="logement" key={annonce.id}>
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
        </article>
      ) : (
       <NotFound />

      )}
    </section>
  );
}

export default Logement;
