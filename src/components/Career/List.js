import React, { useContext } from "react";
import ListDetail from "components/Career/ListDetail";
import { GoLocation } from "react-icons/go";
import { BiMoney, BiTimeFive, BiCodeAlt } from "react-icons/bi";
import { AiOutlineEye, AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { Button } from "reactstrap";
import { IoMdHourglass } from "react-icons/io";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import filterContext from "context/filters/filterContext";
import { Spinner } from "react-bootstrap";

const List = () => {
  const filtersContext = useContext(filterContext);
  const { jobs_list, open_position, loadingjobs } = filtersContext;
  const handleClick = () => {};

  return (
    <>
      {loadingjobs ? (
        <div>
          Loading
          <Spinner animation="border" />
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-12 mx-auto">
            <div className="career-search mb-60">
              <div className="filter-result">
                <p className="mb-30 ff-montserrat">
                  Total Job Openings : {open_position}
                </p>

                {jobs_list.map((job) => (
                  <ListDetail key={job.id} job={job} />
                ))}
              </div>
            </div>

            <nav aria-label="Page navigation">
              <ul className="pagination pagination-reset justify-content-center">
                <li className="page-item disabled">
                  <a
                    className="page-link"
                    href="#"
                    tabIndex="-1"
                    aria-disabled="true"
                  >
                    <GrFormPrevious />
                  </a>
                </li>

                <li className="page-item">
                  <a className="page-link" href="#">
                    <GrFormNext />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default List;
