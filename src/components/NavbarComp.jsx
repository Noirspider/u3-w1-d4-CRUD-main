import React, { useState } from "react";
import { Button, Col, Container, Form, Nav, Navbar, Row } from "react-bootstrap";

function NavbarComp(props) {
  // Definizione dello stato per il valore di ricerca
  const [valueSearched, setValueSearched] = useState("");

  // Funzione per gestire la presentazione del modulo
  function handleSubmit(event) {
    event.preventDefault(); // Previeni il comportamento predefinito del modulo (ricaricamento della pagina)
    props.callbackSubmit(valueSearched); // Chiama una funzione di callback passando il valore cercato
  }

  // Funzione per gestire il cambiamento del campo di ricerca
  function handleSearch(event) {
    console.log(event.target.value); // Stampa il valore inserito nel campo di ricerca
    setValueSearched(event.target.value); // Aggiorna lo stato con il valore inserito
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form inline="true" onSubmit={handleSubmit}>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
                value={valueSearched} // Valore del campo di ricerca impostato nello stato
                onChange={handleSearch} // Funzione di gestione del cambiamento del campo di ricerca
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Search</Button> {/* Pulsante di invio del modulo */}
            </Col>
          </Row>
        </Form>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
