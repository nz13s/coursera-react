import {Navbar, NavbarBrand} from "reactstrap";
import Menu from "./MenuComponent";
import {DISHES} from "../shared/dishes";
import {Component} from "react";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
    }
    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Confusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes}/>
            </div>
        );
    }
}

export default Main;