import React from 'react';
import '../App.css';
import Typed from "react-typed"
import {Button} from "react-bootstrap"

function Header() {
    return (
        <div className="header-wraper">
            <div className="main-info text-center mb-3">
                <h1>Hi.......I'm <span><strong>Allen</strong></span> Nanyonjo</h1>
                <div>
                <Typed
                className="typed-text"
                strings={["Software Developer", "Interior Designer", "Mobile App Developer","Web App Developer","UI/UX Designer","STEM Instructor"]}
                typeSpeed={40}
                backSpeed={60}
                loop/>
                <br/>
                <Button className="header-button"variant="outline-danger text-white">Lets Talk</Button>
                </div>
                
            </div>
        </div>
    )
}

export default Header;

