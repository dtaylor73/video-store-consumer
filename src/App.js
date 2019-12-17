// import axios from 'axios';
import './App.css';
import MovieLibrary from './Components/MovieLibrary.js';
import MovieSearch from './Components/MovieSearch.js';
import CustomerList from './Components/CustomerList.js';

import Customer from './Components/Customer.js';
import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentCustomer: ''
    };
  }
  customerNameCallback = (customer) => {
    // console.log(customer)
    // console.log(id)
    // console.log(customer)
    this.setState({
      currentCustomer: customer
    });
    // console.log(this.state.currentCustomer)
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              {/* <li>
                <Link to="/Home">Home</Link>
              </li> */}
              <li>
                <Link to="/MovieSearch">Movie Search</Link>
              </li>
              <li>
                <Link to="/MovieLibrary">Movie Library</Link>
              </li>
              <li>
                <Link to="/CustomerList">Customer List</Link>
              </li>
            </ul>
          </nav>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          
          <Switch>
            {/* <Route path="/Home">
              <Home />
            </Route> */}
            {/* <Route path="/MovieSearch">
              <MovieSearch/>
            </Route> */}
            <Route path="/MovieLibrary">
              <MovieLibrary />
            </Route>
            {/* <Route path="/MovieSearch">
              <MovieSearch /> */}
            {/* </Route> */}
            <Route path="/Customer">
              <Customer />
            </Route>
            <Route path="/CustomerList">
              <CustomerList customerNameCallback={ this.customerNameCallback }
             />
              {/* {`this is your current customer! ${this.state.currentCustomer.name}`} */}
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
