import React from "react"; // Importa la libreria React

import NavbarComp from "./NavbarComp"; // Importa il componente NavbarComp da un file esterno
import { Container } from "react-bootstrap"; // Importa il componente Container da React-Bootstrap

function MyHeader(props) {
  return (
    /* Componente Container che racchiude il componente NavbarComp */
    <NavbarComp callbackSubmit={props.callbackSubmit} /> /* Passa la funzione di callback come prop a NavbarComp */
  );
}

export default MyHeader; // Esporta il componente MyHeader
