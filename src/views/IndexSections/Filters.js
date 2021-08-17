import React, { useContext } from "react";
import FilterOptions from "../../components/Filters/FilterOptions";
import filterContext from "context/filters/filterContext";

import {
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

export default function Filters() {
  const filtersContext = useContext(filterContext);
  const { setKeyword, setCompany, setSearch } = filtersContext;

  const handleChangeKeyWord = (e) => {
    setKeyword(e.target.value);
  };

  const handleChangeCompany = (e) => {
    setCompany(e.target.value);
  };

  const handleClick = (e) => {
    setSearch(true);
  };
  return (
    <div className="section section-tabs">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="10" xl="6">
            <div className="mb-3">
              <FormGroup>
                <Label for="keywordfor" className="torre-dark">
                  What: Job title, Position, Skills{" "}
                </Label>
                <Input
                  type="text"
                  name="keyword"
                  id="keyword"
                  placeholder="Ex: Developer. Reacj js"
                  onChange={handleChangeKeyWord}
                />
              </FormGroup>
            </div>
          </Col>
          <Col className="ml-auto mr-auto" md="10" xl="6">
            <div className="mb-3">
              <FormGroup>
                <Label for="exampleEmail">Company name</Label>
                <Input
                  type="text"
                  name="where"
                  id="where"
                  placeholder="Ex: torre"
                  onChange={handleChangeCompany}
                />
              </FormGroup>
            </div>
          </Col>
        </Row>
        <Row>
          <FilterOptions />
        </Row>
        <Row>
          <Col>
            <Button onClick={handleClick}>Search</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
