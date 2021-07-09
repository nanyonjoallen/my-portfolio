import React from 'react'

function Footer() {
    return (
        <div className="main-footer footer-style" bg="Warning">
            <div className="container">
                <div className="row">
                    {/* footer column 1 */}
                    <div className="col-md-3 col-sm-6">
                        <h1> this is my footer</h1>
                        <ul className="list-unstyled">
                            <li>Contact</li>
                            <li>Contact</li>
                            <li>Contact</li>
                            <li>Contact</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                     {/* footer column 2 */}
                    <div className="col-md-3 col-sm-6">
                        <h1> this is my footer</h1>
                        <ul className="list-unstyled">
                            <li>Contact</li>
                            <li>Contact</li>
                            <li>Contact</li>
                            <li>Contact</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                     {/* footer column 3 */}
                    <div className="col-md-3 col-sm-6">
                        <h1> this is my footer</h1>
                        <ul className="list-unstyled">
                            <li>Contact</li>
                            <li>Contact</li>
                            <li>Contact</li>
                            <li>Contact</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                     {/* footer column 4*/}
                     <div className="col-md-3 col-sm-6">
                        <h1> this is my footer</h1>
                        <ul className="list-unstyled">
                            <li>Contact</li>
                            <li>Contact</li>
                            <li>Contact</li>
                            <li>Contact</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
                {/* Footer bottom */}
                <div className="footer-bottom">
                    <p className="p.text-xs-center">© ALLEN NANYONJO MAGEZI &nbsp; {new Date().getFullYear()}</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer;