import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/7O2A9908.JPG";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import './Home.css'

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LAISSEZ-MOI <span className="purple"> ME PRÉSENTER </span>
            </h1>
            <p className="home-about-body">
              Je m'appelle <b className="purple">Ahmed Foudi</b>, j'ai <b className="purple">23 ans</b>.
              <br /><br />
              J'ai obtenu mon bac en <b className="purple">2019 en SE (Sciences Experimentale branche Sciences Physique)</b>.
              <br /><br />
              Actuellement, j'ai accès à YouCode pour étudier le <b className="purple">développement web</b>.
              <br /><br />
              J'ai également effectué un stage chez <b className="purple">GiantLink à Fès</b> en tant que <b className="purple">développeur full stack</b>.
              <br /><br />
              Je maîtrise les classiques comme
              <i>
                <b className="purple"> CSS, JavaScript et HTML. </b>
              </i>
              <br />
              <br />
              Mes domaines d'intérêt incluent la création de nouvelles technologies et produits web &nbsp;
              <i>
                <b className="purple"> </b> ainsi que des domaines liés au 
                 <b className="purple">
                    &nbsp;framework Laravel et PHP.
                </b>
              </i>
              <br />
              
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid rounded-circle bordered-image" alt="avatar" />
            </Tilt>
          </Col>

        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>TROUVEZ-MOI SUR</h1>
            <p>
              N'hésitez pas à <span className="purple">vous connecter </span>avec moi
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/FOUDIAHMED"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/foudiahmed/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
