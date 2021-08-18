import React from 'react';
import {Breadcrumb, BreadcrumbItem, Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";
import {Link} from "react-router-dom";

function RenderMenuItem({dish}) {
    return (
        <Link to={`/menu/${dish.id}`}>
            <Card style={{width: '18rem'}}>
                <CardImg width="100%" object src={dish.image} alt={dish.name}/>
                <CardImgOverlay body className="ml-5">
                    <CardTitle heading>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </Link>
    )
}

const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <div className="container">
                <div key={dish.id}>
                    <RenderMenuItem dish={dish}/>
                </div>
            </div>
        )
            ;
    });
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr/>
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );
}


export default Menu;