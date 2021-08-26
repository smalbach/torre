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
  FILTER_SALARY,
  FILTER_UNSETJOB,
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
    loadingcurrentjob: true,
    keyword: "",
    company: "",
    salary: "",
    salaryText: "",
  };
  const headers = {
    "Content-Type": "application/json;charset=UTF-8",
  };

  const [state, dispatch] = useReducer(filterReducer, initialState);

  const [language, setLanguage] = useState([]);
  const [location, setLocation] = useState([]);

  const [jobtype, setJobtype] = useState("");
  const [search, setSearch] = useState(false);
  const [peridiocity, setPeridiocity] = useState("hourly");
  const [currentcyfind, setCurrencyfind] = useState([]);

  const setSalary = (salary) => {
    const dataPayload = {
      salary: salary,
      peridiocity,
      currentcyfind,
    };

    dispatch({
      type: FILTER_SALARY,
      payload: dataPayload,
    });
  };

  const setKeyword = (word) => {
    dispatch({
      type: FILTER_KEYWORD,
      payload: word,
    });
  };

  const setCompany = (word) => {
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

      if (language.length !== 0) {
        datacompose.push({
          language: {
            term: language.name,
            fluency: "conversational",
          },
        });
      }

      if (location.length !== 0) {
        datacompose.push({
          location: {
            term: location.name,
          },
        });
      }

      let currencysearch = "";
      if (state.salary.length === 0) {
        currencysearch = "USD%24";
      } else {
        currencysearch = `${currentcyfind.value}%24`;
        datacompose.push({
          compensation: {
            amount: state.salary,
            currency: `${currentcyfind.value}$`,
            periodicity: peridiocity,
            scope: "with-compensation-only",
          },
        });
      }

      if (jobtype !== "") {
        datacompose.push({
          type: {
            code: jobtype,
          },
        });
      }

      const data = { and: datacompose };

      const SEARCH_URI = `https://search.torre.co/opportunities/_search?currency=${currencysearch}&periodicity=${peridiocity}&lang=en&size=20&aggregate=true`;

      try {
        setSearch(false);

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

  const setPosition = async (id) => {
    dispatch({
      type: FILTER_LOADINGJOBS,
      payload: true,
    });
    const SEARCH_URI = `https://torre.co/api/suite/opportunities/${id}`;
    try {
      const response = await axios.get(SEARCH_URI, "", headers);

      dispatch({
        type: FILTER_SETSELECTEDJOB,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FILTER_LOADINGJOBS,
        payload: null,
      });
    }
    dispatch({
      type: FILTER_LOADINGJOBS,
      payload: null,
    });
  };

  const unsetJob = () => {
    dispatch({
      type: FILTER_UNSETJOB,
    });
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
        salary: state.salary,
        salaryText: state.salaryText,
        loadingjobsid: state.loadingjobsid,
        loadingcurrentjob: state.loadingcurrentjob,
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
        unsetJob,
      }}
    >
      {props.children}
    </filterContext.Provider>
  );
};
export default FilterState;
