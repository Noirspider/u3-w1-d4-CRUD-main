import React from "react"; // Importa la libreria React
import { Alert } from "react-bootstrap"; // Importa il componente Alert da React-Bootstrap

function SubtitleComp() {
  return (
    // Un div con classe CSS per centrare il contenuto
    <div className="text-center">
      {/* Un titolo di secondo livello centrato */}
      <h2>Che Belli Quei Book!</h2>
      {/* Un componente Alert con una chiave unica ("key") e una variante "primary" */}
      <Alert key="primary" variant="primary">
        Tanti Book
      </Alert>
    </div>
  );
}

export default SubtitleComp; // Esporta il componente SubtitleComp
