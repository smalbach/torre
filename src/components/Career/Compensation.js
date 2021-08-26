import React from "react";

const Compensation = ({ compensation }) => {
  let currency = "";
  let maxAmount = "";
  let minAmount = "";
  let compensationtext = "";
  try {
    currency = compensation.data.currency;
  } catch (err) {}
  try {
    maxAmount = compensation.data.maxAmount;
  } catch (err) {}
  try {
    minAmount = compensation.data.minAmount;
  } catch (err) {}

  if (minAmount === "" && maxAmount === "") {
    compensationtext = "Not available";
  } else {
    compensationtext = ` ${minAmount} ${maxAmount}`;
  }
  return (
    <div className="job-description-items">
      {currency} {compensationtext}
    </div>
  );
};

export default Compensation;
