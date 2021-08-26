import React from "react";
import { Row, Col } from "reactstrap";
const Organization = ({ organization }) => {
  console.log(organization);
  return (
    <Row>
      <Col sm="2">
        <figure className="image">
          <img src={organization.picture} alt="" />
        </figure>
      </Col>
      <Col sm="8">{organization.name}</Col>
    </Row>
  );
};

export default Organization;
