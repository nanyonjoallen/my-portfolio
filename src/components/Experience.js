import React from 'react'
import { Container, Row } from 'react-bootstrap';
import "./Experience.style.css";

function Experience() {
    return (
        <div className="experience-section">
            <Container fluid className="container1">
            <h1 className="pt-3 text-center font-details pb-3">My Experience</h1>
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

export default Experience;
