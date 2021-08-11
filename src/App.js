import {Navbar, NavbarBrand} from "reactstrap";
import {Component} from "react";
import Main from "./components/MainComponent";

class App extends Component {
    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Confusion</NavbarBrand>
                    </div>
                </Navbar>
                <Main/>
            </div>
        );
    }
}

export default App;