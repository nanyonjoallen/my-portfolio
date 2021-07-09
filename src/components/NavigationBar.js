import React from 'react';
import '../App.css';
import { BrowserRouter as Router,
   Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav} from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/react-fontawesome'
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Services from "./Services";
import Contact from "./Contact";
import Shop from "./Shop";



function NavigationBar() {
    return (
      <Router>
<Navbar bg="warning" expand="lg" fixed="top" className="animate-navbar justify-content-between">
  <Navbar.Brand href="#home">
    Allenah
    </Navbar.Brand>

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">

    <Nav className="mr-auto">
      <Nav.Link as ={Link} to ={"/home"}>Home</Nav.Link>
      <Nav.Link as ={Link} to ={"/about"}>About</Nav.Link>
      <Nav.Link as ={Link} to ={"/projects"}>Projects</Nav.Link>
      <Nav.Link as ={Link} to ={"/services"}>Services</Nav.Link>
      <Nav.Link as ={Link} to ={"/contact"}>Contact</Nav.Link>
      <Nav.Link as ={Link} to ={"/shop"}>Shop</Nav.Link>
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
    <Route path="/services">
      <Services/>
    </Route>
    <Route path="/contact">
      <Contact/>
    </Route>
    <Route path="/shop">
      <Shop/>
    </Route>        
  </Switch>
</div>
</Router>
  )
        
}

export default NavigationBar;
