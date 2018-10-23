import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS
    };
  }

  render() {
    const HomePage = () => {
      return (
        <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]} leaders={this.state.leaders.filter((leader) => leader.featured)[0]}
        promotions={this.state.promotions.filter((prom) => prom.featured)[0]} />
      );
    }

    return (
      <div>
        <div>
          <Header />
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path ="/menu" component={() => <Menu dishes={this.state.dishes} />}/>
            <Route exact path ="/contactus" component={Contact}/>
            <Redirect to="/home" />
          </Switch>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Main;
