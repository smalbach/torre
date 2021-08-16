import React, { useEffect, useState, useRef } from "react";
import { Input } from "reactstrap";
const Periodicity = ({
  setMax,
  setShowslider,
  currency,
  peridiocities,
  setPeridiocity,
}) => {
  const salaryUDS = 200000;
  console.log(currency);

  const handleChange = (e) => {
    setShowslider(false);
    const { conversion } = currency;

    //TODO: curency of eca country
    let value = 0;
    switch (e.target.value) {
      case "hourly":
        value = Math.round((salaryUDS / (52 * 40 * 12)) * conversion);
        break;
      case "daily":
        value = Math.round((salaryUDS / 365) * conversion);
        break;
      case "weekly":
        value = Math.round((salaryUDS / 52) * conversion);
        break;
      case "monthly":
        value = Math.round((salaryUDS / 12) * conversion);
        break;
      case "yearly":
        value = Math.round(salaryUDS * conversion);
        break;
      default:
        setShowslider(false);
    }
    setPeridiocity(e.target.value);
    if (value > 0) {
      setMax(value);
      setShowslider(true);
    }
  };

  return (
    <Input
      type="select"
      name="periodicity"
      id="Periodicity"
      onChange={handleChange}
      className="select-control"
      defaultValue=""
    >
      <option value="">Select..</option>
      {peridiocities.map((values) => (
        <option key={values.value} value={values.value}>
          {values.name}
        </option>
      ))}
    </Input>
  );
};

export default Periodicity;
