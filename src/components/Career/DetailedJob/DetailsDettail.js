import React from "react";

const DetailsDetails = ({ data, tittle }) => {
  return (
    <>
      {data ? (
        <>
          <h3>{tittle}</h3>
          <ul>
            {data.map((value, index) => (
              <li key={index}>{value.content}</li>
            ))}
          </ul>
        </>
      ) : null}
    </>
  );
};

export default DetailsDetails;
