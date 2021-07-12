import React from 'react';
import '../App.css';
import { BrowserRouter as Router,
   Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, Button} from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/react-fontawesome'
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Services from "./Services";
import Experience from "./Experience";
import Awards from "./Awards";
import Contact from "./Contact";



function NavigationBar() {
    return (

      <Router>
        <Navbar className="navbar" expand="lg" fixed="top">
          <Navbar.Brand className="navbar-brand text-white " href="/home">
            {/* <img src="/logo.svg" width="30" height="30" className="d-inline-block align-top" alt=""/>  */}
            <h1>Alle<span>n</span>ah</h1> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav justify-content-center p-4">
            <Nav.Link className="nav-link text-white px-3 py-2" as ={Link} to ={"/home"} active>Home</Nav.Link>
            <Nav.Link className="nav-link text-white px-3 py-2" as ={Link} to ={"/about"}>About</Nav.Link>
            <Nav.Link className="nav-link text-white px-3 py-2" as ={Link} to ={"/projects"}>Projects</Nav.Link>
            <Nav.Link className="nav-link text-white px-3 py-2" as ={Link} to ={"/skills"}>Skills</Nav.Link>
            <Nav.Link className="nav-link text-white px-3 py-2" as ={Link} to ={"/experience"}>Experience</Nav.Link>
            <Nav.Link className="nav-link text-white px-3 py-2" as ={Link} to ={"/services"}>Services</Nav.Link>
            <Nav.Link className="nav-link text-white px-3 py-2" as ={Link} to ={"/awards"}>Awards</Nav.Link>
            <Nav.Link className="nav-link text-white px-3 py-2" as ={Link} to ={"/contact"}>Contact</Nav.Link>
            {/* <Button className="btn-chat" variant="outline-success">Let's Talk</Button> */}
          </Nav>
          <Nav>
            <Button className="nav-button" variant="outline-danger text-white ">Lets Talk</Button>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
        
        <div>
          <Switch>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/projects">
              <Projects/>
            </Route>
            <Route path="/skills">
              <Skills/>
            </Route>
            <Route path="/experience">
              <Experience/>
            </Route>
            <Route path="/services">
              <Services/>
            </Route>
            <Route path="/awards">
              <Awards/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>        
          </Switch>
        </div>
      </Router>

  )
        
}

export default NavigationBar;
