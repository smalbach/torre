import React, { useEffect, useState, useContext } from "react";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";
import { Input, Form, Row, Col, FormGroup, Label } from "reactstrap";
import NumberFormat from "react-number-format";
import filterContext from "context/filters/filterContext";

const SalarySlider = ({ max, currency }) => {
  const filtersContext = useContext(filterContext);
  const { setSalary } = filtersContext;

  const [value, setValue] = useState(0);
  useEffect(() => {
    setSalary(value);
  }, [value]);

  return (
    <>
      <Form>
        <FormGroup>
          <Row className="justify-content-md-center">
            <Col sm="10">
              <RangeSlider
                variant="warning"
                value={value}
                min={0}
                max={max}
                onChange={(changeEvent) => setValue(changeEvent.target.value)}
              />
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col sm="6">
              <NumberFormat
                thousandsGroupStyle="thousand"
                value={value}
                prefix={`${currency.prefix} `}
                decimalSeparator="."
                displayType="input"
                type="text"
                thousandSeparator={true}
                allowNegative={true}
                className="form-control"
                onValueChange={(values) => {
                  const { formattedValue, value } = values;
                  // formattedValue = $2,223
                  // value ie, 2223
                  setValue(value);
                  //this.setState({ profit: formattedValue });
                }}
              />
            </Col>
          </Row>
        </FormGroup>
      </Form>
    </>
  );
};

export default SalarySlider;
