import React from 'react';
import { Container, Row } from 'react-bootstrap';
import "./Projects.style.css";

function Projects() {
    return (
        <div className="projects-section">
        <Container fluid className="project-container">
        <h1 className="pt-3 text-center font-details pb-3">Recent Projects</h1>
        <Container className="container2 bg-dark">
            <Row>
                <h2 className="text-white">joy</h2>
                <h2>joy</h2>
                <h2>joy</h2>
            </Row>
        </Container>
        </Container>

    </div>        
    )
}

export default Projects;
