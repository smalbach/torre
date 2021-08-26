/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useRef } from "react";
import Compensation from "components/Career/Compensation";
import OrganizationLogo from "components/Career/OrganizationLogo";
import Locations from "components/Career/Locations";
import JobType from "components/Career/JobType";
import { GoLocation } from "react-icons/go";
import { BiMoney, BiTimeFive } from "react-icons/bi";

import { IoMdHourglass } from "react-icons/io";
import filterContext from "context/filters/filterContext";
import { Link } from "react-router-dom";

const ListDetail = ({ job }) => {
  const filtersContext = useContext(filterContext);
  const { setPosition } = filtersContext;
  const currentJobRef = useRef();
  const {
    remote,
    locations,
    compensation,
    type,
    skills,
    created,
    organizations,
    objective,
  } = job;

  const handleClickSetJob = () => {
    setPosition(job.id);
  };

  return (
    <div ref={currentJobRef}>
      <div className="job-block" onClick={handleClickSetJob}>
        <div className="inner-box">
          <div className="content">
            <span className="company-logo">
              <OrganizationLogo organizations={organizations} />
            </span>
            <h4>
              <a href="#"> {objective}</a>
            </h4>
            <ul className="job-info">
              <li>
                <span className="icon">
                  <GoLocation />
                </span>{" "}
                {remote ? (
                  <div className="job-description-items">Remote</div>
                ) : null}
                {locations.map((value, index) => (
                  <Locations key={index} location={value} />
                ))}
              </li>
              <li>
                <span className="icon">
                  <BiTimeFive />
                </span>
                <JobType type={type} />
              </li>

              <li>
                <span className="icon">
                  <BiMoney />
                </span>
                {compensation ? (
                  <Compensation compensation={compensation.visible} />
                ) : (
                  " Not available"
                )}
              </li>
              <li>
                <span className="icon">
                  <IoMdHourglass />
                </span>
                {created}
              </li>
            </ul>
            <ul className="job-other-info">
              {skills.map((skill, index) => (
                <li key={index} className="green">
                  {skill.name}
                </li>
              ))}
            </ul>
            <Link
              to={{ pathname: `https://torre.co/jobs/${job.id}` }}
              className="btn btn-secondary"
              target="_blank"
            >
              Quick apply
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListDetail;
