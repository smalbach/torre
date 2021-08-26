import React, { useContext } from "react";
import Header from "components/Career/DetailedJob/Header";
import Organization from "components/Career/DetailedJob/Organization";
import Details from "components/Career/DetailedJob/Details";

import { AiFillCloseCircle } from "react-icons/ai";
import filterContext from "context/filters/filterContext";

import { Button } from "reactstrap";
import { Row, Col } from "reactstrap";

const DetailedJob = ({ job }) => {
  const filtersContext = useContext(filterContext);
  const { unsetJob } = filtersContext;
  console.log(job);
  const handleCloseDetail = () => {
    unsetJob();
  };
  return (
    <>
      <Row>
        <Col>
          <Button close className="job-btn-close" onClick={handleCloseDetail}>
            <AiFillCloseCircle />
          </Button>
        </Col>
      </Row>
      <Row>
        <div className="content-column col-lg-12 col-md-12 col-sm-12">
          <Header job={job} />

          <h3>Organization(s) name(s)</h3>
          {job.organizations.map((value) => (
            <Organization organization={value} />
          ))}

          <div className="job-detail">
            <Details details={job.details} />
          </div>
        </div>
      </Row>
    </>
  );
};

export default DetailedJob;
