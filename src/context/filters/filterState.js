import React, { useState, useReducer, useEffect } from "react";
import filterContext from "./filterContext";
import filterReducer from "./filterReducer";
import axios from "axios";

import {
  FILTER_KEYWORD,
  FILTER_SETJOBS,
  FILTER_SETSELECTEDJOB,
  FILTER_LOADINGJOBS,
  FILTER_LOADINGJOBSID,
} from "types";

const FilterState = (props) => {
  const initialState = {
    message: null,
    jobs_list: [],
    open_position: 0,
    pagination: null,
    job_descrption: null,
    current_job: null,
    loadingjobs: null,
    lodingjosid: null,
  };

  const [state, dispatch] = useReducer(filterReducer, initialState);

  const [keyword, setKeyword] = useState("");
  const [company, setCompany] = useState("");
  const [language, setLanguage] = useState([]);
  const [location, setLocation] = useState([]);
  const [salary, setSalary] = useState([]);
  const [jobtype, setJobtype] = useState([]);
  const [search, setSearch] = useState(false);
  const [peridiocity, setPeridiocity] = useState("hourly");
  const [currentcyfind, setCurrencyfind] = useState([]);

  useEffect(() => {
    searchJobs();
  }, [search]);

  const searchJobs = async () => {
    if (search) {
      dispatch({
        type: FILTER_LOADINGJOBS,
        payload: true,
      });
      console.log("1");
      let currencysearch = "";
      if (salary.length === 0) {
        currencysearch = "USD%24";
      } else {
        currencysearch = `${currentcyfind.value}%24`;
      }
      console.log({ keyword });
      console.log("2");

      let data = { status: { code: "open" } };
      if (keyword !== "") {
        console.log("Keywor");
        console.log(data);
        data = {
          and: [
            {
              "skill/role": {
                text: keyword,
                experience: "potential-to-develop",
              },
            },
            { status: { code: "open" } },
          ],
        };
      }
      console.log("3");
      const SEARCH_URI = `https://search.torre.co/opportunities/_search?currency=${currencysearch}&periodicity=${peridiocity}&lang=en&size=20&aggregate=true`;

      console.log(SEARCH_URI);
      console.log("4");
      try {
        setSearch(false);

        const headers = {
          "Content-Type": "application/json;charset=UTF-8",
        };

        const response = await axios.post(SEARCH_URI, data, headers);

        dispatch({
          type: FILTER_SETJOBS,
          payload: response.data,
        });
      } catch (error) {
        dispatch({
          type: FILTER_LOADINGJOBS,
          payload: null,
        });
      }
    }
  };

  const setPosition = (id) => {
    try {
      dispatch({
        type: FILTER_SETSELECTEDJOB,
        payload: id,
      });
    } catch (error) {}
  };

  return (
    <filterContext.Provider
      value={{
        jobs_list: state.jobs_list,
        open_position: state.open_position,
        job_descrption: state.job_descrption,
        current_job: state.current_job,
        loadingjobs: state.loadingjobs,
        lodingjosid: state.lodingjosid,
        peridiocity: state.peridiocity,

        setCompany,
        setLanguage,
        setLocation,
        setSalary,
        setJobtype,
        setSearch,
        setPosition,
        setPeridiocity,

        setCurrencyfind,
      }}
    >
      {props.children}
    </filterContext.Provider>
  );
};
export default FilterState;
