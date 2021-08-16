import React from "react";
import { Input } from "reactstrap";
import currencys from "utils/data/currency";
import axios from "axios";

const Currency = ({ setCurrency, setShowslider, setShowsperidiocity }) => {
  const SEARCH_URI = "https://free.currconv.com/api/v7/convert";
  const handleChange = async (e) => {
    setShowslider(false);
    setShowsperidiocity(false);
    let conversion = 1;
    const prefix = e.target.selectedOptions[0].getAttribute("prefix");

    if (e.target.value !== "") {
      try {
        const response = await axios.get(
          `${SEARCH_URI}?q=USD_${e.target.value}&compact=ultra&apiKey=051b09978947ea09742a`
        );

        conversion = response.data[`USD_${e.target.value}`];

        setCurrency({
          value: e.target.value,
          conversion: conversion,
          prefix: prefix,
        });
        setShowslider(true);
        setShowsperidiocity(true);
      } catch (error) {
        setCurrency({
          value: e.target.value,
          conversion: conversion,
          prefix: prefix,
        });
        setShowslider(true);
        setShowsperidiocity(true);
      }
    }
  };

  return (
    <Input
      type="select"
      name="currency"
      id="exampleSelect"
      onChange={handleChange}
      className="select-control"
    >
      <option value="">Select..</option>
      {currencys.map((values) => (
        <option key={values.value} value={values.value} prefix={values.prefix}>
          {values.name}
        </option>
      ))}
    </Input>
  );
};

export default Currency;
