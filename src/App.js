import React, { Component } from 'react';
import Price from './components/Price';
import Order from './components/Order'
import { Route, Router, Switch } from 'react-router-dom';
import Error from './components/Error';
import OrderConfirmation from './components/OrderConfirmation';
import history from './components/history';
import Auth from './components/Auth';


class App extends Component {
  state = {
    pricing: [{ title: "Bronze", planPrice: "$26", description: "Basic plan with 15 gb", description2: "30days", description3: "24 hours", id: 1 },
    { title: "Silver", planPrice: "$46", description: "Standard plan with 305 gb", description2: "30days", description3: "24 hours", id: 2 },
    { title: "Gold", planPrice: "$78", description: "Unlimited plan ", description2: "30days", description3: "24 hours", id: 3 }
    ],

    userDatas: [{ firstName: "John", lastName: "Ayo", password: "1234", email: "ayo@gmail.com", id: 1 }]

  }


  userInfo = (userData) => {
    userData.id = Math.floor(Math.random() * 100)
    let userDatas = [...this.state.userDatas, userData]
    this.setState({
      userDatas
    })
    console.log(this.state.userDatas);

  }

  render() {
    return (
      <div className="Pricing-App container" >
        <Router history={history}>
          <Switch>
            <Route exact path="/" render={(props) => (<Price pricing={this.state.pricing} />)} />
            <Route path="/Order" render={(props) => (<Order userInfo={this.userInfo} />)} />/>
            <Route path="/OrderConfirmation" component={OrderConfirmation} />
            <Route path="/Auth" component={Auth} />
            <Route component={Error} />
          </Switch>
        </Router>
      </div >
    );
  }
}

export default App;

