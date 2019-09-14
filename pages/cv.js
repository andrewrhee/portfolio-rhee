import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { Container, Row, Col } from "reactstrap";

class Cv extends React.Component {
  render() {
    return (
      <BaseLayout {...this.props.auth} title="Andrew Rhee - Get My CV">
        <BasePage title="Get My CV" className="cv-page">
          <Row>
            <Col md={{ size: 8, offset: 2 }}>
              <div className="cv-title">
                <a
                  download="andrew-rhee-resume-full-stack-developer.pdf"
                  className="btn btn-success"
                  href="/static/andrew-rhee-resume-full-stack-developer.pdf"
                >
                  Download
                </a>
              </div>
              <iframe
                style={{ width: "100%", height: "800px" }}
                src="/static/andrew-rhee-resume-full-stack-developer.pdf"
              ></iframe>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Cv;