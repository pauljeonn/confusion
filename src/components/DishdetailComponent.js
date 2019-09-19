import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

// Q. Implement a function named renderDish() that takes the dish as a parameter and returns the JSX code for laying out the details of the dish in a reactstrap Card

// This is the fuction for rendering the selected dish (received as an argument) as another card at the end
const RenderDish = ({ dish }) => {
  // Checkes if dish is really selected
  if (dish != null)
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  else return <div></div>;
};

// Q. Implement a function named renderComments() that takes the comments array as a parameter and lays out each comment as shown in the image below. You should use the Bootstrap list-unstyled class on the list.
const RenderComments = ({ dish }) => {
  if (dish != null) {
    return (
      <div>
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {dish.comments.map(comment => {
            return (
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>
                  -- {comment.author} ,{" "}
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit"
                  }).format(new Date(Date.parse(comment.date)))}{" "}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return <div></div>;
  }
};

const Dishdetail = (props) => {
  if (props.dish != null) {
    return (
      <div class="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
          <RenderComments dish={props.dish} />
          </div> 
        </div>
      </div>
    );
  } else {
    return (<div></div>)
  }
  
};

export default Dishdetail;
