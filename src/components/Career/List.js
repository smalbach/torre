/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import ListDetail from "components/Career/ListDetail";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import filterContext from "context/filters/filterContext";

const List = () => {
  const filtersContext = useContext(filterContext);
  const { jobs_list, open_position, loadingjobs } = filtersContext;

  return (
    <>
      {loadingjobs ? (
        <div>Loading</div>
      ) : (
        <div className="row">
          <div className="col-lg-12 mx-auto">
            <div className="career-search mb-60">
              <div className="filter-result">
                <p className="mb-30 ff-montserrat">
                  Total Job Openings : {open_position}
                </p>

                {jobs_list.map((job, index) => (
                  <ListDetail key={job.id} job={job} />
                ))}
              </div>
            </div>

            <nav aria-label="Page navigation">
              <ul className="pagination pagination-reset justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link">
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
