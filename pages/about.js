import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { Col, Row } from "reactstrap";

class About extends React.Component {
  render() {
    return (
      <BaseLayout {...this.props.auth} title="Andrew Rhee - Learn More About Me">
        <BasePage className="about-page">
          <Row className="mt-5">
            <Col md="6">
              <div className="left-side">
                <h1 className="title fadein">Hello, Welcome</h1>
                <h4 className="subtitle fadein">To My About Page</h4>
                <p className="subsubTitle fadein">
                  Feel free to read a short description about me.
                </p>
              </div>
            </Col>
            <Col md="6">
              <div className="fadein" id="intro">
                <p>
                  My name is Andrew Rhee and I am an experienced software
                  engineer and freelance developer.
                </p>

                <p>
                  I have over 10 years of experience working on a wide range of
                  technologies and projects from a variety of programming
                  languages and frameworks.
                </p>

                <h3>Languages / Frameworks:</h3>
                <ul>
                  <li>Ruby / Ruby on Rails</li>
                  <li>Node.js / Express / Next.js</li>
                  <li>Python / Django</li>
                  <li>PHP / Laravel</li>
                  <li>React.js</li>
                  <li>Redux</li>
                  <li>MongoDB</li>
                  <li>MySQL</li>
                  <li>PostgreSQL</li>
                  <li>Angular.js</li>
                  <li>Backbone.js</li>
                  <li>Vanilla JavaSript</li>
                  <li>jQuery</li>
                  <li>Java</li>
                  <li>C++</li>
                  <li>Wordpress</li>
                  <li>Shopify</li>
                </ul>

                <p>
                  Throughout my career, I have acquired advanced technical
                  knowledge and the ability to break down complicated business
                  requirements into simple programming tasks that get the job
                  done and within budget.
                </p>

                <p>
                  Feel free to reach out to me regarding your own projects, I'd
                  love to see where I can be of some help! Talk to you soon! :)
                </p>
              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default About;
