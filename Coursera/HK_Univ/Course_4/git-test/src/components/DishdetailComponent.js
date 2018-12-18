import React, {Component}  from 'react';
//import CommentModal from './CommentModal';
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Row,
  Col
} from 'reactstrap';
import {Link} from 'react-router-dom'
import {Control, LocalForm, Errors} from 'react-redux-form';

//Validation logic
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

function RenderDish({dish}) {
  if (dish != null) {
    return (<Card>
      <CardImg width="50%" src={dish.image} alt={dish.name}/>
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
        <CardText align="right">${dish.price}</CardText>
      </CardBody>
    </Card>);
  } else {
    return (<div></div>)
  }
}

function RenderComments({comments, addComment, dishId}) {
  const commentListing = comments.map((eachComment) => {
    return (<div key={eachComment.id}>
      <div>{eachComment.comment}</div>
      <div>
        <p>
          <strong>--{eachComment.author}</strong>, {
            new Intl.DateTimeFormat('en-US', {
              year: 'numeric',
              month: 'short',
              day: '2-digit'
            }).format(new Date(Date.parse(eachComment.date)))
          }</p>
      </div>
    </div>)
  });
  return commentListing;
}

const DishDetail = (props) => {
  if (props.dish != null) {
    return (<div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to='/menu'>Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active="active">{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="col-12">
        <h3>{props.dish.name}</h3>
        <hr/>
      </div>
      <div className="row">
        <div className="col-12 col-lg-5 m-1">
          <RenderDish dish={props.dish}/>
        </div>
        <div>
          <div className="col-12 col-lg-7 m-1">
            <h2>Comments</h2>
            <RenderComments comments={props.comments} addComment={props.addComment} dishId={props.dish.id}/>
            <CommentForm dishId={dishId} addComment={addComment}/>
          </div>
        </div>
      </div>
    </div>);
  } else {
    return (<div></div>);
  }
}


class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleComment = this.handleComment.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleComment(event) {
    this.toggleModal();
    this.props.addComment(this.props.dishId, event.rating, event.author, event.comment);
  }

  render() {
    return(
      <div>
        <Button type="button" color="primary"   onClick={this.toggleModal}>
            <i className="fa fa-pencil fa-lg"> Submit Review</i>
        </Button>
        <React.Fragment>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal} /*Having this in the modal and in the header makes the X button!*/> Submit Comment </ModalHeader>
            <ModalBody>
              <LocalForm onSubmit={(values) => this.handleComment(values)}>
                <Row className="form-group">
                  <Label htmlFor="rating" md={2}>Rating</Label>
                  <Col md={10}>
                    <Control.select model=".rating" id="rating" name="rating" placeholder="Rating" className="form-control">
                      <option value="5">5</option>
                      <option value="4">4</option>
                      <option value="3">3</option>
                      <option value="2">2</option>
                      <option value="1">1</option>
                    </Control.select>
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="name" md={2}>Your Name</Label>
                  <Col md={10}>
                    <Control.text model=".name" id="name" name="name" placeholder="Name" className="form-control" validators={{
                        required,
                        minLength: minLength(3),
                        maxLength: maxLength(15)
                      }}/>
                    <Errors className="text-danger" model=".name" show="touched" messages={{
                        required: 'Required',
                        minLength: 'Must be greater than 2 characters',
                        maxLength: 'Must be 15 characters or less'
                      }}/>
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="comment" md={2}>Comments</Label>
                  <Col md={10}>
                    <Control.textarea rows="6" model=".comment" id="comment" name="comment" placeholder="Comment" className="form-control" validators={{
                        required,
                        minLength: minLength(3),
                        maxLength: maxLength(225)
                      }}/>
                    <Errors className="text-danger" model=".comment" show="touched" messages={{
                        required: 'Required',
                        minLength: 'Must be greater than 2 characters',
                        maxLength: 'Must be 225 characters or less'
                      }}/>
                  </Col>
                </Row>
                <Button type="submit" value="submit" color="primary">Submit</Button>
              </LocalForm>
            </ModalBody>
        </Modal>
      </React.Fragment>
      </div>
    );
  }
};

export default DishDetail;
