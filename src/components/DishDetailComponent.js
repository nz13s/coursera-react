import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

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

function RenderDishComments({dish}) {
    return (
        <Card className="col-12 col-md-5 m-1">
            <CardBody>
                <CardTitle heading>Comments</CardTitle>
                <CardText>
                    {dish.comments.map((element) => {
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
    if (props.dish !== null) {
        return (
            <div className="container">
                <div className="row">
                    <RenderDishDetail dish={props.dish}/>
                    <RenderDishComments dish={props.dish}/>
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