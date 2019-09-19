import React, { Component } from "react";
import { Media } from "reactstrap";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";
import Dishdetail from "./DishdetailComponent";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  /*
  // This is the fuction for rendering the selected dish (received as an argument) as another card at the end
  renderDish(dish) {
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
  }
  */

  // This renders all the cards in dishes
  render() {
    const menu = this.props.dishes.map(dish => {
      return (
        <div className="col-12 col-md-5 m-1">
            <Card key={dish.id} onClick={() => this.props.onClick(dish.id)}>
              {/* Here, the component's state changes by setState and React decides to re-render the component. */}
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
              </CardImgOverlay>
            </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
        {/* 
          This renders the selected dish at the end 
          {this.renderDish(this.state.selectedDish)}
        */}
      </div>
    );
  }
}

export default Menu;
