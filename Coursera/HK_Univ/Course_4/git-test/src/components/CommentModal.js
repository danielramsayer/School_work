import React, {Component} from 'react';
import {
  Collapse,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Row,
  Col,
  Input
} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control, LocalForm, Errors} from 'react-redux-form';

//Validation logic
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentModal extends Component {
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
    alert('Current State is: ' + JSON.stringify(event));
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
export default CommentModal;
