import {DISHES} from "../shared/dishes";
import {Component} from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Menu from "./MenuComponent";
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
        return (
            <div>
                <Header/>
                <Menu dishes={this.state.dishes} onClick={(dish) => this.onDishSelect(dish)}/>
                <DishDetail dish={this.state.selectedDish}/>
                <Footer/>
            </div>
        );
    }
}

export default Main;