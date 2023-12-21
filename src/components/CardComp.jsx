import React, { useState } from "react"; // Importa la libreria React e il hook useState
import { Card, Button, Row, Col } from "react-bootstrap"; // Importa i componenti Card, Button, Row e Col da React-Bootstrap

function CardComp(props) {
  // Definizione dello stato per la variabile "selected" inizializzata a "false"
  const [selected, setSelected] = useState(false);

  // Funzione per invertire il valore di "selected"
  function toggleSelected() {
    let toggle = !selected; // Inverti il valore di "selected"
    setSelected(toggle); // Imposta il nuovo valore di "selected"
    console.log(toggle); // Stampa il valore di "toggle" nella console
  }

  // Funzione per gestire il clic sul pulsante "Detail" e passare il libro selezionato
  function handleDetail(bookObj) {
    props.callbackDetailPage("detail"); // Chiama la funzione di callback per la pagina di dettaglio
    props.callbackBook(bookObj); // Chiama la funzione di callback con il libro selezionato
  }

  return (
    // Un componente Card da React-Bootstrap con un identificativo unico ("key") basato su "props.book.asin"
    // La classe "shadow-lg" viene aggiunta quando "selected" è "true" per applicare un'ombra alla carta
    <Card key={props.book.asin} className={selected ? "shadow-lg" : ""}>
      {/* Un'immagine della carta con un'altezza specificata, e la classe "object-fit-cover" per il posizionamento */}
      <Card.Img
        variant="top"
        style={{ height: "300px" }}
        className="object-fit-cover"
        src={props.book.img}
        onClick={toggleSelected} // Quando l'immagine viene cliccata, chiama la funzione toggleSelected
      />
      <Card.Body>
        {/* Il titolo del libro con un'altezza massima e la classe "overflow-hidden" */}
        <Card.Title style={{ height: "100px" }} className="overflow-hidden">
          {props.book.title}
        </Card.Title>
        <Card.Text></Card.Text>
        {/* Una riga con due colonne per i pulsanti "Detail" e "Delete" */}
        <Row>
          <Col>
            {/* Pulsante "Detail" con una funzione di callback che passa il libro selezionato */}
            <Button variant="primary" onClick={() => handleDetail(props.book)}>
              Detail
            </Button>
          </Col>
          <Col className="d-flex justify-content-end">
            {/* Pulsante "Delete" con una funzione di callback per la rimozione del libro */}
            <Button variant="danger" onClick={() => props.callbackDelete(props.book.asin)}>
              Delete
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default CardComp; // Esporta il componente CardComp
