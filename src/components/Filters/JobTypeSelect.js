import React, { useContext } from "react";
import { Input } from "reactstrap";
import filterContext from "context/filters/filterContext";

const JobTypeSelect = () => {
  const filtersContext = useContext(filterContext);
  const { setJobtype } = filtersContext;

  const handleChange = (e) => {
    setJobtype(e.target.value);
  };
  return (
    <Input
      type="select"
      name="jobtype"
      id="jobtype"
      onChange={handleChange}
      className="select-control"
    >
      <option value="">Job type</option>
      <option value="full-time-employment">Full time employment</option>
      <option value="part-time-employment">Part time employment</option>
      <option value="freelance-gigs">Freelance gigs</option>
      <option value="internships">Internships</option>
      <option value="advising">Advising</option>
    </Input>
  );
};

export default JobTypeSelect;
