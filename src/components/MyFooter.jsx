import React from "react"; // Importa la libreria React
import { Col, Container, Row } from "react-bootstrap"; // Importa i componenti Col, Container e Row da React-Bootstrap

function MyFooter() {
  return (
    // Un componente Container con classi CSS e stili specifici
    <Container fluid className="  p-5 bg-secondary text-white">
      <Row>
        <Col className="d-flex justify-content-center">
          {/* Un div con il testo "CIAO SONO UN FOOTER" allineato al centro */}
          <div>CIAO SONO UN FOOTER</div>
        </Col>
      </Row>
    </Container>
  );
}

export default MyFooter; // Esporta il componente MyFooter
