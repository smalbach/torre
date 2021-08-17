import {
  FILTER_KEYWORD,
  FILTER_SETJOBS,
  FILTER_SETSELECTEDJOB,
  FILTER_LOADINGJOBS,
  FILTER_LOADINGJOBSID,
  FILTER_COMPANY,
} from "types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case FILTER_LOADINGJOBS:
      return {
        ...state,
        loadingjobs: action.payload,
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
      };

    case FILTER_SETSELECTEDJOB:
      return {
        ...state,
        current_job: state.jobs_list.filter((job) => job.id === action.payload),
        job_descrption: true,
        loadingjobs: null,
      };

    default:
      return state;
  }
};
