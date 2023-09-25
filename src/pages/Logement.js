import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Importez useParams
import data from "../Annonces.json";

// Importation des collapse
import Collapse from "../components/Collapse";

//Importation du carousel
import Slideshow from "../components/Slideshow";

function Logement() {
  const { id } = useParams(); // Obtenez l'ID de l'URL

  const [annonce, setAnnonce] = useState(null);

  useEffect(() => {
    // Recherchez l'annonce correspondante dans le tableau JSON en fonction de l'ID
    const annonceTrouvee = data.find((item) => item.id === id);
    setAnnonce(annonceTrouvee); // Définissez l'annonce dans l'état local
  }, [id]);

  return (
    <section className="logement">
      {annonce ? ( // Vérifiez si l'annonce a été trouvée avant de l'afficher
        <article key={annonce.id}>
          <Slideshow images={annonce.pictures}/>
          <h1>{annonce.title}</h1>
          <span>{annonce.location}</span>
          <Collapse title="Description" description={annonce.description} />
          <Collapse title="Equipement" description={annonce.equipments} />
        </article>
      ) : (
        <p>Logement introuvable</p>
      )}
    </section>
  );
}

export default Logement;
