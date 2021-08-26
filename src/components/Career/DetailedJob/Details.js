import React from "react";
import DetailsDettail from "components/Career/DetailedJob/DetailsDettail";

const Organization = ({ details }) => {
  const benefits = details.filter((value) => value.code === "benefits");
  const stock = details.filter((value) => value.code === "stock-compensations");
  const reason = details.filter((value) => value.code === "reason");
  const responsibilities = details.filter(
    (value) => value.code === "responsibilities"
  );
  const requirements = details.filter((value) => value.code === "requirements");
  const challenges = details.filter((value) => value.code === "challenges");
  const careerpath = details.filter((value) => value.code === "career-path");
  const organizations = details.filter(
    (value) => value.code === "organizations"
  );
  const teamculture = details.filter((value) => value.code === "team-culture");
  const additional = details.filter((value) => value.code === "additional");

  return (
    <>
      <DetailsDettail data={benefits} tittle="Benefits" />
      <DetailsDettail data={stock} tittle="Stock" />
      <DetailsDettail data={reason} tittle="Description" />
      <DetailsDettail data={responsibilities} tittle="Responsibilities" />
      <DetailsDettail data={challenges} tittle="Challenges" />
      <DetailsDettail data={requirements} tittle="Requirements" />
      <DetailsDettail data={careerpath} tittle="Career path" />
      <DetailsDettail data={organizations} tittle="Organizations" />
      <DetailsDettail data={teamculture} tittle="Team culture" />
      <DetailsDettail data={additional} tittle="additional" />
    </>
  );
};

export default Organization;
