import React from 'react'; 
import BaseLayout from '../components/layouts/BaseLayout';
import Typed from 'react-typed';

import { Button, Container, Row, Col } from 'reactstrap';

class Index extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isFlipping: false
    }

    this.roles = ['Developer', 'Tech Lover', 'Team Player', 'React.js', 'Ruby on Rails', 'Node.js'];
  }

  componentDidMount() {
    this.animateCard();
  }

  componentWillUnmount() {
    this.cardAnimtationInterval && clearInterval(this.cardAnimtationInterval);
  }

  animateCard() {

    this.cardAnimtationInterval = setInterval(() => {
      this.setState({
        isFlipping: !this.state.isFlipping
      });
    }, 5000);
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const { isFlipping } = this.state;

    return (
      <BaseLayout
        className={`cover ${isFlipping ? "cover-1" : "cover-0"}`}
        {...this.props.auth}
        headerType="index"
        title="Andrew Rhee - Portfolio"
      >
        <div className="main-section">
          <div className="background-image">
            <img src="/static/images/background-index.png" />
          </div>

          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper ${isFlipping ? "isFlipping" : ""}`}>
                    <div className="front">
                      <div className="hero-section-content">
                        <h2> Full Stack Web Developer </h2>
                        <div className="hero-section-content-intro">
                          Have a look at my portfolio and job history.
                        </div>
                      </div>
                      <img
                        className="image"
                        src="/static/images/section-1.png"
                        alt="Guy Programming Welcome Picture"
                      />
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2> Get Your Projects Done </h2>
                        <div className="hero-section-content-intro">
                          Professional and Top Quality Service in Web
                          Development
                        </div>
                      </div>
                      <img
                        className="image"
                        src="/static/images/section-2.png"
                        alt="Guy Programming Welcome Picture"
                      />
                      <div className="shadow-custom shadow-custom-2">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    {isAuthenticated && (
                      <span>
                        {" "}
                        <b>{user.name}</b>{" "}
                      </span>
                    )}
                    Welcome to the portfolio website of Andrew Rhee. Get
                    informed, collaborate and discover projects I was working on
                    through the years!
                  </h1>
                </div>
                <Typed
                  loop
                  typeSpeed={60}
                  backSpeed={60}
                  strings={this.roles}
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  className="self-typed"
                  cursorChar="|"
                />
                <div className="hero-welcome-bio">
                  <h2>Let's take a look at my work.</h2>
                </div>
              </Col>
            </Row>
            <span className="service-link">
              Vector Illustration Credit: {" "}
              <a href="https://www.vecteezy.com/" target="_blank">
                vecteezy.com
              </a>
            </span>
          </Container>
        </div>
      </BaseLayout>
    );
  }
}

export default Index;