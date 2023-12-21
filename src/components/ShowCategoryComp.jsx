import React from "react";
import { Col, Row } from "react-bootstrap";
import CardComp from "./CardComp";

function ShowCategoryComp(props) {
  return (
    // Un componente di riga (Row) che contiene le carte dei libri
    <Row className="gy-3 mb-5">
      {props.categoryArray
        // Filtra gli elementi in base al valore di ricerca del titolo del libro
        .filter((book) => book.title.toLowerCase().includes(props.valueToSearch.toLowerCase()))
        // Mappa ogni libro filtrato in un componente CardComp
        .map((book, index) => (
          // Un componente di colonna (Col) che contiene il singolo libro (CardComp)
          <Col xs={6} md={4} xl={3} xxl={2} key={`cardBook-${index}`}>
            {/* Passa il libro come prop al componente CardComp */}
            <CardComp
              book={book}
              callbackDetailPage={props.callbackDetailPage}
              callbackDelete={props.callbackDelete}
              callbackBook={props.callbackBook}
            />
          </Col>
        ))}
    </Row>
  );
}

export default ShowCategoryComp;
