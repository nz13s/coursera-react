import React from "react";
import {Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";
import {Loading} from "./LoadingComponent";

function RenderCard({item, isLoading, errMess}) {
    if (isLoading) {
        return (
            <Loading/>
        );
    } else if (errMess) {
        return (
            <h4>{errMess}</h4>
        )
    }
    return (
        <Card style={{width: '18rem'}}>
            <CardImg src={item.image} alt={item.name} aspectRatio="0.5"/>
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props) {
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md col-m1">
                    <RenderCard item={props.dish}
                                isLoading={props.dishesLoading}
                                errMess={props.dishesErrMess}/>
                </div>
                <div className="col-12 col-md col-m1">
                    <RenderCard item={props.promotion}/>
                </div>
                <div className="col-12 col-md col-m1">
                    <RenderCard item={props.leader}/>
                </div>
            </div>
        </div>
    );
}

export default Home;