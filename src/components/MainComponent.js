import {Navbar, NavbarBrand} from "reactstrap";
import Menu from "./MenuComponent";
import {DISHES} from "../shared/dishes";
import {Component} from "react";
import DishDetail from "./DishDetailComponent";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({selectedDish: dish});
    }

    render() {
        const dish_detail = new DishDetail(undefined);
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Confusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes} onClick={(dish) => this.onDishSelect(dish)}/>
                <div className="container">
                    {dish_detail.render(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Main;