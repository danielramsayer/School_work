import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom'


  function RenderDish({dish}) {
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

  function RenderComments({comments}) {
    const commentListing = comments.map((eachComment) => {
      return (
        <div key={eachComment.id}>
          <div>{eachComment.comment}</div>
          <div><p><strong>--{eachComment.author}</strong>, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(eachComment.date)))}</p></div>
        </div>
      )
    });
    return commentListing;
  }

  const DishDetail = (props) => {
    if(props.dish != null){
      return (
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
              <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        <div className="row">
          <div className="col-12 col-lg-5 m-1">
            <RenderDish dish={props.dish} />
          </div>
          <div>
            <div className="col-12 col-lg-7 m-1">
              <h2>Comments</h2>
              <RenderComments comments={props.comments} />
            </div>
          </div>
        </div>
      </div>
      );
    } else {
      return (<div></div>);
    }
  }



export default DishDetail;
