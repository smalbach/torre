import React, { useContext } from "react";
import DetailedJob from "components/Career/DetailedJob";
import filterContext from "context/filters/filterContext";
import Loader from "utils/Loader";

const JobDescription = () => {
  const filtersContext = useContext(filterContext);
  const { job_descrption, current_job, loadingjobsid } = filtersContext;
  console.log(current_job);
  return (
    <>
      {loadingjobsid ? (
        <>
          Loading...
          <Loader />
        </>
      ) : (
        <>{job_descrption ? <DetailedJob job={current_job} /> : null}</>
      )}
    </>
  );
};

export default JobDescription;
