import React from "react";

const JobType = ({ type }) => {
  let jobtype = "";

  switch (type) {
    case "full-time-employment":
      jobtype = "Full time";
      break;
    case "part-time-employment":
      jobtype = "Part time";
      break;
    case "freelance-gigs":
      jobtype = "Freelance";
      break;
    case "internships":
      jobtype = "Internships";
      break;
    case "advising":
      jobtype = "Advising";
      break;
    default:
      jobtype = "";
      break;
  }

  return <>{jobtype}</>;
};

export default JobType;
