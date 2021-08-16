import React from "react";
import List from "components/Career/List";
import JobDescription from "components/Career/JobDescription";
import classnames from "classnames";

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

export default function Oportunities() {
  return (
    <div>
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="10" xl="6">
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
          <Col className="ml-auto mr-auto" md="10" xl="6">
            <Card>
              <CardHeader>Descriptión </CardHeader>
              <CardBody>
                <JobDescription />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
