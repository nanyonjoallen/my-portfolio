import React from 'react'
import "./Footer.style.css";
function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* footer column 1 */}
                    <div className="col-md-3 col-sm-6">
                        <h1>footer</h1>
                        <ul className="list-unstyled">
                            <li>Contact</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                     {/* footer column 2 */}
                    <div className="col-md-3 col-sm-6">
                        <h1>footer</h1>
                        <ul className="list-unstyled">
                            <li>Contact</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                     {/* footer column 3 */}
                    <div className="col-md-3 col-sm-6">
                        <h1>footer</h1>
                        <ul className="list-unstyled">
                            <li>Contact</li>
                            <li>Contact</li>     
                        </ul>
                    </div>
                     {/* footer column 4*/}
                     <div className="col-md-3 col-sm-6">
                        <h1>footer</h1>
                        <ul className="list-unstyled">
                            <li>Contact</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>               
            </div>
            {/* Footer bottom */}
            <div className="footer-bottom">
                    <p className="text-center">© ALLEN NANYONJO MAGEZI &nbsp; {new Date().getFullYear()}. All rights reserved</p>
                    
                </div>
        </div>
    )
}

export default Footer;