import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody } from 'reactstrap';

class DishDetail extends Component {
  renderDish(dish) {
    if (dish!=null) {
      return (
          <Card>
            <CardImg width="50%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
              <CardText align="right">${dish.price}</CardText>
            </CardBody>
          </Card>
      );
    } else {
      return (
        <div></div>
      )
    }
  }

  renderComments(comments) {

    const commentListing = comments.map((eachComment) => {
      return (
        <div key={eachComment.id}>

          <div>{eachComment.comment}</div>
          <div><p><strong>--{eachComment.author}</strong>, {eachComment.date}</p></div>
        </div>
      )
    });
    return commentListing;
  }

  render() {
    if(this.props.dish != null){
      return (
        <div className="row">
          <div className="col-12 col-lg-5 m-1">
            {this.renderDish(this.props.dish)}
          </div>
          <div>
            <div className="col-12 col-lg-7 m-1">
              <h2>Comments</h2>
              {this.renderComments(this.props.dish.comments)}
            </div>
          </div>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}


export default DishDetail;
