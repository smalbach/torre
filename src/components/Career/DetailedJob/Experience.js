/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
const Experience = ({ strength }) => {
  const [experience, setExperience] = useState("");

  useEffect(() => {
    let exp = strength.experience;
    exp = exp.replaceAll("-", " ");
    exp = exp.replaceAll("plus", " + ");
    setExperience(exp);
  }, []);

  return (
    <Row>
      <Col sm="2">{strength.name}</Col>
      <Col sm="2">{experience}</Col>
    </Row>
  );
};

export default Experience;
