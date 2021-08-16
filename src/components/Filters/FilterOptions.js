import React from "react";
import { Col } from "reactstrap";
import LangSelect from "components/Filters/LangSelect";
import LocationSelect from "components/Filters/LocationSelect";
import SalarySelect from "components/Filters/SalarySelect";
import JobTypeSelect from "components/Filters/JobTypeSelect";

const FilterOptions = () => {
  return (
    <>
      <Col sm="3">
        <LangSelect />
      </Col>
      <Col sm="3">
        <LocationSelect />
      </Col>
      <Col sm="3">
        <SalarySelect />
      </Col>
      <Col sm="3">
        <JobTypeSelect />
      </Col>
    </>
  );
};

export default FilterOptions;
