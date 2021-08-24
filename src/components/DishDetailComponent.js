import {
    Card, CardBody, CardImg, CardText, CardTitle, Breadcrumb, BreadcrumbItem, ModalHeader, ModalBody,
    Label, Button, Modal, Row
} from "reactstrap";
import {Link} from "react-router-dom";
import React, {Component} from "react";
import {Control, Errors, LocalForm} from "react-redux-form";

const required = (val) => val && val.length;
const validRating = (val) => val !== "";
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => !(val) || (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        console.log("Current states is:" + JSON.stringify(values));
        alert("Current states is:" + JSON.stringify(values));
        this.toggleModal();
    }

    render() {
        return (
            <React.Fragment>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"> Submit comment </span>
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}> Submit comment </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating"
                                                id="rating"
                                                name="rating"
                                                className="form-control"
                                                validators={{required, validRating}}
                                                innerRef={(input) => this.rating = input}>
                                    <option>{""}</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                                <Errors className="text-danger"
                                        model=".rating"
                                        show="touched"
                                        messages={{validRating: 'Value cannot be default. Please choose a rating'}}/>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="name">Name</Label>
                                <Control.text model=".name"
                                              id="name"
                                              name="name"
                                              className="form-control"
                                              validators={{
                                                  required,
                                                  minLength: minLength(3),
                                                  maxLength: maxLength(15)
                                              }}
                                              innerRef={(input) => this.name = input}/>
                                <Errors className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 3 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}/>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment">Comment</Label>
                                <Control.textarea model=".comment"
                                                  id="comment"
                                                  name="comment"
                                                  rows="6"
                                                  className="form-control"
                                                  validators={{required}}
                                                  innerRef={(input) => this.comment = input}/>
                                <Errors className="text-danger"
                                        model=".comment"
                                        show="touched"
                                        messages={{required: 'Required'}}/>
                            </Row>
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}

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
                <CommentForm/>
            </CardBody>
        </Card>
    )
}

const DishDetail = (props) => {
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