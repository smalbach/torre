/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useReducer, useEffect } from "react";
import filterContext from "./filterContext";
import filterReducer from "./filterReducer";
import axios from "axios";

import {
  FILTER_KEYWORD,
  FILTER_SETJOBS,
  FILTER_SETSELECTEDJOB,
  FILTER_LOADINGJOBS,
  FILTER_COMPANY,
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
    keyword: "",
    company: "",
  };

  const [state, dispatch] = useReducer(filterReducer, initialState);

  const [language, setLanguage] = useState([]);
  const [location, setLocation] = useState([]);
  const [salary, setSalary] = useState([]);
  const [jobtype, setJobtype] = useState([]);
  const [search, setSearch] = useState(false);
  const [peridiocity, setPeridiocity] = useState("hourly");
  const [currentcyfind, setCurrencyfind] = useState([]);

  const testingTD = () => {
    console.log(language);
    console.log(location);
    console.log(jobtype);
    console.log(setKeyword);
  };

  const setKeyword = (word) => {
    console.log(word);
    dispatch({
      type: FILTER_KEYWORD,
      payload: word,
    });
  };

  const setCompany = (word) => {
    console.log(word);
    dispatch({
      type: FILTER_COMPANY,
      payload: word,
    });
  };

  useEffect(() => {
    searchJobs();
  }, [search]);

  const searchJobs = async () => {
    if (search) {
      dispatch({
        type: FILTER_LOADINGJOBS,
        payload: true,
      });

      let currencysearch = "";
      if (salary.length === 0) {
        currencysearch = "USD%24";
      } else {
        currencysearch = `${currentcyfind.value}%24`;
      }

      let datacompose = [{ status: { code: "open" } }];
      if (state.keyword !== "") {
        datacompose.push({
          "skill/role": {
            text: state.keyword,
            experience: "potential-to-develop",
          },
        });
      }
      if (state.company !== "") {
        datacompose.push({
          organization: {
            term: state.company,
          },
        });
      }
      const data = { and: datacompose };

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
        company: state.company,
        language: state.language,
        location: state.location,
        jobtype: state.jobtype,

        setCompany,
        setLanguage,
        setLocation,
        setSalary,
        setJobtype,
        setSearch,
        setPosition,
        setPeridiocity,
        setKeyword,
        setCurrencyfind,
      }}
    >
      {props.children}
    </filterContext.Provider>
  );
};
export default FilterState;
