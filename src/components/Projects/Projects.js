import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import evento from "../../Assets/itlens.webp";
import pets from "../../Assets/citronix.webp";
import Transaction from "../../Assets/cyclo.webp";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Transaction}
              isBlog={false}
              title="CycloClubHorizon"
              description="Cette application de gestion des courses contre la montre de cyclisme est développée pour le Cyclo Club Horizon. Elle permet la gestion des coureurs, des compétitions, des inscriptions, des résultats et des classements pour les courses cyclistes individuelles."
              ghLink="https://github.com/FOUDIAHMED/CycloClubHorizon.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={evento}
              isBlog={false}
              title="ITlens"
              description="Création d'une API REST avec Spring Boot pour gérer des sondages dans le domaine IT."
              ghLink="https://github.com/FOUDIAHMED/ITlens.git"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pets}
              isBlog={false}
              title="Citronix"
              description="Citronix est une application de gestion pour une ferme de citrons, permettant aux fermiers de suivre la production, la récolte, et la vente de leurs produits."
              ghLink="https://github.com/FOUDIAHMED/Citronix.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
