import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Profile  from '../images/profile.png';
import "./About.style.css";
import Button from 'react-bootstrap/Button';

function About() {
    return (
       

        <div className="about-section" id="about-me">
            <Container fluid className="about-container">
            <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
                <Container className="about-container2">
                <Row className="pt-3 pb-5 align-items-center">
                    {/* my profile */}
                    <Col xs={12} md={6}>
                        <Row className="justify-content-center mb-2 mr-2">
                            <Image className="profile justify-content-center" alt="allen's pic" src={Profile} roundedCircle />
                        </Row>
                    </Col>
                    {/* my profile description */}
                    <Col xs={12} md={6}>
                        <Row className=" align-items-start p-2 my-details rounded">
                            {/* my description */}
                            Hello, my name is <strong>Allen Nanyonjo Magezi</strong>
                            <br/> I am a passionate developer and a STEM Coach based in Uganda. I am a full stack web developer with React js, Express js, Node js, MySql and NoSql database.
                            <br/>I successfully completed my bachelors degree in information technology
                            <br/>Providing clients with the best level of quality service and experience is to them is always my goal.
                            <br /> Along with that, I also COACH children and girls on their journey of becoming professional in any STEM field .
                            <br />I love learning about new technologies  and innovations that are solving the world's difficult problems, from saving the environment, political insecurities and many more.
                            <br /> <br />
                        
                            {/* my links */}
                            <Col className="d-flex justify-content-center flex-wrap p-5">
                                <div>
                                    <a className="px-1 py-2" href="/Contact"><Button variant="outline-primary">Lets Chat</Button></a>
                                </div>
                                <div>
                                    <a  className=" font-italic px-1 py-2" href="/Contact"><Button variant="outline-success">My Resume</Button></a>
                                </div>
                                <div>
                                    <a className="px-1 py-2"  href="/Contact"><Button variant="outline-dark">Github</Button></a>
                                </div>
                                <div>
                                    <a className="px-1 py-2"  href="/Contact"><Button variant="outline-info">Linkedin</Button></a>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row> 
            </Container>
            </Container> 
            {/* <hr/>    */}            
        </div>
        
    )
}

export default About;
