import React from "react";

import IndexNavbar from "components/Navbars/JobsNavar.js";

import Footer from "components/Footer/Footer.js";

import Filters from "views/IndexSections/Filters.js";
import Oportunities from "views/IndexSections/Oportunities.js";

export default function Jobs() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");

    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar />

      <div className="wrapper">
        <div className="main">
          <Filters />
          <Oportunities />
        </div>
        <Footer />
      </div>
    </>
  );
}
