import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Importez useParams
import data from "../Annonces.json";

// Importation des collapse
import Collapse from "../components/Collapse";

function Logement() {
  const { id } = useParams(); // Obtenez l'ID de l'URL

  const [annonce, setAnnonce] = useState(null);

  useEffect(() => {
    // Recherchez l'annonce correspondante dans le tableau JSON en fonction de l'ID
    const annonceTrouvee = data.find((item) => item.id === id);
    setAnnonce(annonceTrouvee); // Définissez l'annonce dans l'état local
  }, [id]);

  return (
    <div>
      {annonce ? ( // Vérifiez si l'annonce a été trouvée avant de l'afficher
        <div key={annonce.id}>
          <h2>{annonce.title}</h2>
          <Collapse title="Description" description={annonce.description} />
          <Collapse title="Equipement" description={annonce.equipments} />
        </div>
      ) : (
        <p>Logement introuvable</p>
      )}
    </div>
  );
}

export default Logement;
