import React from "react";

import IndexNavbar from "components/Navbars/JobsNavar.js";

import Filters from "views/IndexSections/Filters.js";
import Oportunities from "views/IndexSections/Oportunities.js";

export default function Jobs() {
  return (
    <>
      <IndexNavbar />

      <div className="wrapper">
        <div className="main">
          <Filters />
          <Oportunities />
        </div>
      </div>
    </>
  );
}
