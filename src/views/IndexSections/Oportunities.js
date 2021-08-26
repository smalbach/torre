import React, { useContext } from "react";
import List from "components/Career/List";
import JobDescription from "components/Career/JobDescription";
import filterContext from "context/filters/filterContext";
import MoonLoader from "react-spinners/MoonLoader";
import { css } from "@emotion/react";
// reactstrap components
import {
  TabContent,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";

const override = css`
  display: block;

  border-color: red;
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`;

export default function Oportunities() {
  const filtersContext = useContext(filterContext);
  const { loadingcurrentjob, loadingjobs } = filtersContext;

  return (
    <div>
      {loadingjobs ? (
        <MoonLoader color="#C0CA33" css={override} loading={true} size={200} />
      ) : null}

      <Container>
        <Row>
          <Col
            className="ml-auto mr-auto overflow-auto oportunities-box"
            md="12"
            xl="12"
            hidden={!loadingcurrentjob}
          >
            <Card>
              <CardHeader>
                <i className="tim-icons icon-spaceship" /> Available positions
              </CardHeader>
              <CardBody>
                <TabContent className="tab-space">
                  <List />
                </TabContent>
              </CardBody>
            </Card>
          </Col>
          {!loadingcurrentjob ? (
            <Col className="ml-auto mr-auto" md="12" xl="12">
              <Card>
                <CardBody>
                  <JobDescription />
                </CardBody>
              </Card>
            </Col>
          ) : null}
        </Row>
      </Container>
    </div>
  );
}
