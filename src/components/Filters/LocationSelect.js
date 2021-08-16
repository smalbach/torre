import React, { useState, useContext, Fragment } from "react";
import axios from "axios";
import { AsyncTypeahead } from "react-bootstrap-typeahead"; // ES2015

import filterContext from "context/filters/filterContext";

const SEARCH_URI = "https://restcountries.eu/rest/v2/name/";

const LocationSelect = () => {
  const filtersContext = useContext(filterContext);
  const { setLocation } = filtersContext;

  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);

  const handleSearch = async (query) => {
    setIsLoading(true);

    const response = await axios.get(
      `${SEARCH_URI}${query}?fields=name;translations`
    );
    console.log(response);
    const options = response.data.map((i) => ({
      id: i.code,
      name: i.name,
    }));
    setOptions(options);
    setIsLoading(false);
    console.log(options);
  };

  const filterBy = () => true;

  const handlechange = (e) => {
    setLocation(e[0]);
  };
  return (
    <AsyncTypeahead
      filterBy={filterBy}
      id="async-example"
      isLoading={isLoading}
      labelKey="name"
      minLength={2}
      onSearch={handleSearch}
      options={options}
      placeholder="Location..."
      onChange={handlechange}
      renderMenuItemChildren={(option, props) => (
        <Fragment>
          <span>{option.name}</span>
        </Fragment>
      )}
    ></AsyncTypeahead>
  );
};

export default LocationSelect;
