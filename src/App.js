// import axios from 'axios';
import './App.css';
import RentalLibrary from './Components/RentalLibrary.js';
import MovieSearch from './Components/MovieSearch.js';
import CustomerList from './Components/CustomerList.js';
import Checkout from './Components/Checkout.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Checkout from './Components/Checkout';

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
      currentCustomer: '',
      currentMovie: ''
    };

  }
  selectCustomerApp = (customer) => {
    this.setState({
      currentCustomer: customer,
    });
    
  }

  clearState = () =>{
    this.setState({
      currentCustomer:'',
      currentMovie: ''
    })
  }



  selectMovieApp = (movie) => {
   console.log(movie)
    this.setState({
      currentMovie: movie
    })
    console.log(this.state.currentMovie)
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/MovieSearch">Movie Search</Link>
              </li>
              <li>
                <Link to="/RentalLibrary">Rental Library</Link>
              </li>
              <li>
                <Link to="/CustomerList">Customer List</Link>
              </li>
            </ul>
            <Checkout 
              currentCustomer={this.state.currentCustomer}
              currentMovie={this.state.currentMovie}
              clearState= {this.clearState}
            />
          </nav>

          <Switch>
            <Route path="/RentalLibrary">
              <RentalLibrary selectMovieApp={this.selectMovieApp}/>
            </Route>
            <Route path="/MovieSearch">
              <MovieSearch /> 
            </Route>
            <Route path="/CustomerList">
              <CustomerList customerNameCallback={this.selectCustomerApp} /> 
            </Route>
          </Switch>
        </div>
      </Router>
    );
  };
}


export default App;

