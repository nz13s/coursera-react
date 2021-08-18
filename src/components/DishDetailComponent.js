import {Card, CardBody, CardImg, CardText, CardTitle, Breadcrumb, BreadcrumbItem} from "reactstrap";
import {Link} from "react-router-dom";
import React from "react";

function RenderDishDetail({dish}) {
    return (
        <Card className="col-12 col-md-5 m-1">
            <CardImg width="100%" object src={dish.image} alt={dish.name}/>
            <CardBody>
                <CardTitle heading>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    )
}

function RenderDishComments({comments}) {
    return (
        <Card className="col-12 col-md-5 m-1">
            <CardBody>
                <CardTitle heading>Comments</CardTitle>
                <CardText>
                    {comments.map((element) => {
                        const dateString = element.date;
                        const dateObj = new Date(dateString);
                        const newDate =
                            `${dateObj.toLocaleString('en', {month: 'short'})} 
                                            ${dateObj.getDay()}, ${dateObj.getFullYear()}`;
                        return (
                            <div>
                                <p>{element.comment}</p>
                                <p>-- {element.author}, {newDate}</p>
                            </div>
                        )
                    })}
                </CardText>
            </CardBody>
        </Card>
    )
}

const DishDetail = (props) => {
    console.log(props.comments);
    if (props.dish !== null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/menu">Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <RenderDishDetail dish={props.dish}/>
                    <RenderDishComments comments={props.comments}/>
                </div>
            </div>
        )
    } else {
        return (
            <div>

            </div>
        )
    }
}

export default DishDetail;