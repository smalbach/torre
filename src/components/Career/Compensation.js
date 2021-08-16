import React from "react";

const Compensation = ({ compensation }) => {
  const { currency, maxAmount, minAmount, periodicity } = compensation.data;
  return (
    <>
      {currency} -{minAmount}- {maxAmount}
    </>
  );
};

export default Compensation;
