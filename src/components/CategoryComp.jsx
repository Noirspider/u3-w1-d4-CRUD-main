import React from "react"; // Importa la libreria React
import { ButtonGroup, Button } from "react-bootstrap"; // Importa i componenti ButtonGroup e Button da React-Bootstrap

function CategoryComp({ callbackCategory }) {
  return (
    // Un componente ButtonGroup da React-Bootstrap per raggruppare i bottoni
    <ButtonGroup>
      {/* Un pulsante con un identificativo unico ("key") e un colore di sfondo variante "primary" */}
      {/* Quando il pulsante viene cliccato, chiama la funzione di callback con il nome della categoria "fantasy" */}
      <Button key={"btn1"} variant={"primary"} onClick={() => callbackCategory("fantasy")}>
        Fantasy
      </Button>
      {/* Ripeti lo stesso schema per altre categorie */}
      <Button key={"btn2"} variant={"primary"} onClick={() => callbackCategory("history")}>
        History
      </Button>
      <Button key={"btn3"} variant={"primary"} onClick={() => callbackCategory("horror")}>
        Horror
      </Button>
      <Button key={"btn4"} variant={"primary"} onClick={() => callbackCategory("romance")}>
        Romance
      </Button>
      <Button key={"btn5"} variant={"primary"} onClick={() => callbackCategory("scifi")}>
        Sci-Fi
      </Button>
    </ButtonGroup>
  );
}

export default CategoryComp; // Esporta il componente CategoryComp
