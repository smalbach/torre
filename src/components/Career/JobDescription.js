import React, { useContext } from "react";
import JobDetail from "components/Career/JobDetail";
import filterContext from "context/filters/filterContext";

const JobDescription = () => {
  const filtersContext = useContext(filterContext);
  const { job_descrption, current_job } = filtersContext;

  return (
    <>
      {job_descrption ? (
        <JobDetail key={current_job[0].id} job={current_job[0]} />
      ) : null}
    </>
  );
};

export default JobDescription;
