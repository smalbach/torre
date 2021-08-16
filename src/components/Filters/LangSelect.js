import React, { useState, useContext, Fragment } from "react";
import axios from "axios";
import { AsyncTypeahead } from "react-bootstrap-typeahead"; // ES2015
import filterContext from "context/filters/filterContext";

const SEARCH_URI = "https://torre.co/api/suite/languages";

const LangSelect = () => {
  const filtersContext = useContext(filterContext);
  const { setLanguage } = filtersContext;

  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);

  const handleSearch = async (query) => {
    setIsLoading(true);

    const response = await axios.get(`${SEARCH_URI}?q=${query}&locale=es`);
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
    setLanguage(e[0]);
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
      placeholder="Language..."
      onChange={handlechange}
      renderMenuItemChildren={(option, props) => (
        <Fragment>
          <span>{option.name}</span>
        </Fragment>
      )}
    ></AsyncTypeahead>
  );
};

export default LangSelect;
