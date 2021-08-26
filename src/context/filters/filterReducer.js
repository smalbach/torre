import {
  FILTER_KEYWORD,
  FILTER_SETJOBS,
  FILTER_SETSELECTEDJOB,
  FILTER_LOADINGJOBS,
  FILTER_LOADINGJOBSID,
  FILTER_COMPANY,
  FILTER_SALARY,
  FILTER_UNSETJOB,
} from "types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case FILTER_LOADINGJOBS:
      return {
        ...state,
        loadingjobs: action.payload,
      };
    case FILTER_SALARY:
      return {
        ...state,
        salary: action.payload.salary,
        salaryText: `${action.payload.currentcyfind.value} ${action.payload.salary} ${action.payload.peridiocity} `,
      };

    case FILTER_LOADINGJOBSID:
      return {
        ...state,
        loadingjobsid: action.payload,
      };
    case FILTER_KEYWORD:
      return {
        ...state,
        keyword: action.payload,
      };
    case FILTER_COMPANY:
      return {
        ...state,
        company: action.payload,
      };
    case FILTER_SETJOBS:
      return {
        ...state,
        jobs_list: action.payload.results,
        open_position: action.payload.size,
        pagination: action.payload.pagination,
        loadingjobs: null,
        loadingcurrentjob: true,
      };

    case FILTER_SETSELECTEDJOB:
      return {
        ...state,
        current_job: action.payload,
        job_descrption: true,
        loadingjobs: null,
        loadingcurrentjob: null,
        loadingjobsid: null,
      };

    case FILTER_UNSETJOB:
      return {
        ...state,
        current_job: null,
        loadingcurrentjob: true,
      };

    default:
      return state;
  }
};
