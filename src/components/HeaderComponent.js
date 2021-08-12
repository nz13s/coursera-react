import React, {Component} from "react";
import {Navbar, NavbarBrand, Jumbotron} from "reactstrap";

class Header extends Component {
    render() {
        return (
            //ReactFragment short form is <> ... </>
            <React.Fragment>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Confusion</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Confusion</h1>
                                <p>Hungry and confused</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Header;