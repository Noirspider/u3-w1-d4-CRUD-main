import React, { useState } from "react";
import SubtitleComp from "./SubtitleComp";
import { Col, Container, Row } from "react-bootstrap";
import CardComp from "./CardComp";
import CategoryComp from "./CategoryComp";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import ShowCategoryComp from "./ShowCategoryComp";
import MyDetail from "./MyDetail";

// Definizione di un oggetto contenente tutte le categorie di libri
const allCategories = {
  fantasy: fantasy,
  history: history,
  horror: horror,
  romance: romance,
  scifi: scifi,
};

function MyMain(props) {
  // Definizione dello stato per la categoria selezionata e la libreria di libri
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [library, setLibrary] = useState(allCategories);

  // Gestisce il click su un pulsante di categoria
  const handleCategoryButton = (categoryName) => {
    setSelectedCategory(categoryName); // Imposta la categoria selezionata
    console.log(categoryName); // Stampa il nome della categoria selezionata
    props.callbackSubmit(""); // Chiama una funzione passata come props
  };

  // Gestisce la rimozione di una carta (libro) dalla libreria
  const handleDeleteCard = (asin) => {
    let updatedLibrary = { ...library }; // Crea una copia dell'oggetto libreria
    // Filtra i libri nella categoria selezionata escludendo il libro con l'ASIN specifico
    updatedLibrary[selectedCategory] = library[selectedCategory].filter((book) => book.asin !== asin);
    setLibrary(updatedLibrary); // Aggiorna la libreria con la nuova versione
    console.log(updatedLibrary); // Stampa la libreria aggiornata
  };

  return (
    <>
      <SubtitleComp /> {/* Componente per il sottotitolo */}
      <div className="text-center m-5">
        <CategoryComp callbackCategory={handleCategoryButton} /> {/* Componente per le categorie */}
      </div>
      <Container>
        {/* Verifica se è stata selezionata una categoria */}
        {library[selectedCategory] ? (
          (console.log(library[selectedCategory]), // Stampa la libreria della categoria selezionata
          (
            <ShowCategoryComp
              callbackDetailPage={props.callbackDetailPage}
              valueToSearch={props.valueToSearch}
              callbackDelete={handleDeleteCard}
              categoryArray={library[selectedCategory]}
              callbackBook={props.callbackBook}
            />
          ))
        ) : (
          <p className="text-center">Nessun libro disponibile per questo genere.</p> // Nessuna categoria selezionata
        )}
      </Container>
    </>
  );
}

export default MyMain;
