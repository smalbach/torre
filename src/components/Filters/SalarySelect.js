import React, { useState, useEffect, useContext } from "react";
import filterContext from "context/filters/filterContext";
import "react-responsive-modal/styles.css";
import Curency from "utils/Currency";
import Periodicity from "utils/Periodicity";
import SalarySlider from "components/Filters/SalarySlider";
import peridiocities from "utils/data/peridiocities";

import { Modal } from "react-responsive-modal";
import { Input, Row, Col, FormGroup, Label } from "reactstrap";
import "./css/modal.css";

const SalarySelect = () => {
  const filtersContext = useContext(filterContext);
  const { setSalary, setPeridiocity, setCurrencyfind } = filtersContext;

  const [open, setOpen] = useState(false);

  const [max, setMax] = useState(500);
  const [showslider, setShowslider] = useState(false);
  const [showsperidiocity, setShowsperidiocity] = useState(false);
  const [currency, setCurrency] = useState([]);

  useEffect(() => {}, [max, showslider]);
  useEffect(() => {
    setCurrencyfind(currency);
  }, [currency]);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <>
      <Input placeholder="Salary" type="text" onClick={onOpenModal} />
      <Input
        placeholder="Salary"
        name="type"
        type="hidden"
        onClick={onOpenModal}
      />
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Desired Salary</h2>
        <div>
          <Row>
            <Col sm="6">
              <FormGroup>
                <Label for="exampleSelect">Curency</Label>
                <Curency
                  setCurrency={setCurrency}
                  setShowslider={setShowslider}
                  setShowsperidiocity={setShowsperidiocity}
                />
              </FormGroup>
            </Col>
            <Col sm="6">
              <FormGroup>
                <Label for="exampleSelect">Periodicity</Label>
                <Periodicity
                  setMax={setMax}
                  setShowslider={setShowslider}
                  currency={currency}
                  peridiocities={peridiocities}
                  setPeridiocity={setPeridiocity}
                />
              </FormGroup>
            </Col>
            {showslider ? (
              <Col sm="12">
                <FormGroup>
                  <Label for="exampleSelect">Range</Label>
                  <SalarySlider
                    currency={currency}
                    setSalary={setSalary}
                    step={1}
                    max={max}
                  />
                </FormGroup>
              </Col>
            ) : null}
          </Row>
        </div>
      </Modal>
    </>
  );
};

export default SalarySelect;
