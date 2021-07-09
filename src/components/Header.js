import React from 'react';
import '../App.css';
import Typed from "react-typed"
import {Button} from "react-bootstrap"

function Header() {
    return (
        <div className="header-wraper">
            <div className="main-info text-center mb-3">
                <h3>Hi...I AM <span><strong>ALLENAH</strong></span></h3>
                <div>
                <Typed
                className="typed-text"
                strings={["Software Developer", "Interior Designer", "Mobile App Development"]}
                typeSpeed={40}
                backSpeed={60}
                loop/>
                <br/>
                <Button variant="warning">Contact</Button>{' '}
                <a href="/Contact" className="btn-lost">hhh</a>
                </div>
                
            </div>
        </div>
    )
}

export default Header;

