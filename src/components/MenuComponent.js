import React from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";

function RenderMenuItem({dish}) {
    console.log(dish.image);
    return (
        <Card style={{width: '18rem'}}>
            <CardImg width="100%" object src={dish.image} alt={dish.name}/>
            <CardImgOverlay body className="ml-5">
                <CardTitle heading>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
}

const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <div className="container">
                <div key={dish.id}>
                    <RenderMenuItem dish={dish} onClick={props.onClick}/>
                </div>
            </div>
    )
        ;
    });
    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
    );
}


export default Menu;