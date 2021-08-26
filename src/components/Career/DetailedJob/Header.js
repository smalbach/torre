/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Attachments from "components/Career/DetailedJob/Attachments";
import JobType from "components/Career/JobType";
import Experience from "components/Career/DetailedJob/Experience";

const Header = ({ job }) => {
  return (
    <>
      <div className="job-block-outer">
        <div className="job-block-seven style-two">
          <div className="inner-box">
            <div className="content">
              <Attachments attachments={job.attachments} />
              <h4>
                <a href="#">{job.objective}</a>
              </h4>
              <h5>
                <JobType type={job.commitment.code} />
              </h5>
              <div> Skills and experience needed</div>
              {job.strengths.map((value) => (
                <Experience strength={value} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
