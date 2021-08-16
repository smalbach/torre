import React, { useContext } from "react";
import Compensation from "components/Career/Compensation";
import JobType from "components/Career/JobType";
import { GoLocation } from "react-icons/go";
import { BiMoney, BiTimeFive, BiCodeAlt } from "react-icons/bi";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { Button } from "reactstrap";
import { IoMdHourglass } from "react-icons/io";
import filterContext from "context/filters/filterContext";

const ListDetail = ({ key, job }) => {
  const filtersContext = useContext(filterContext);
  const { setPosition } = filtersContext;

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
  const compensation_visible = compensation.visible;

  const handleClickPrev = () => {};
  const handleClickNext = () => {};
  const handleClickSetJob = () => {
    setPosition(job.id);
  };

  return (
    <div
      className="job-box d-md-flex align-items-center justify-content-between mb-30"
      onClick={handleClickSetJob}
    >
      <div className="job-left my-4 d-md-flex align-items-center flex-wrap">
        <div className="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
          <img src={organizations[0].picture} alt={organizations[0].name} />
        </div>
        <div className="job-content">
          <h5 className="text-center text-md-left job-title">{objective}</h5>
          <ul className="d-md-flex flex-wrap text-capitalize ff-open-sans">
            <li className="mr-md-4">
              <GoLocation /> {remote ? "Remote" : null}
              {locations.map((value) => (
                <>-{value}</>
              ))}
            </li>
            <li className="mr-md-4">
              <BiMoney />
              {compensation_visible ? (
                <Compensation compensation={compensation} />
              ) : (
                " Not available"
              )}
            </li>
            <li className="mr-md-4">
              <BiTimeFive /> <JobType type={type} />
            </li>
            <li className="mr-md-4 ">
              <div className="job-skill">
                <BiCodeAlt />
                {skills.map((skill, index) => `${skill.name} - `)}
              </div>
            </li>
            <li className="mr-md-4">
              <IoMdHourglass /> {created}
            </li>
            <li className="mr-md-4 ">
              <Button onClick={handleClickPrev}>
                {" "}
                <AiOutlineLike />{" "}
              </Button>
              <Button onClick={handleClickNext}>
                <AiOutlineDislike />
              </Button>
            </li>
          </ul>
        </div>
      </div>
      <div className="job-right my-4 flex-shrink-0"></div>
    </div>
  );
};

export default ListDetail;
