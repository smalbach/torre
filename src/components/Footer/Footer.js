import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="12">
            <h1 className="title">Torre</h1>
            <h3>Torre is your matching network for work.</h3>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
