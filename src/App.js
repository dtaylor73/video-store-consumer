// import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RentalLibrary from './Components/RentalLibrary.js';
import MovieSearch from './Components/MovieSearch.js';
import CustomerList from './Components/CustomerList.js';
import Checkout from './Components/Checkout.js';
import Home from './Components/Home.js';


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

            <div className='navigation-bar'>
              <Link to='/Home' className='nav-item'>Home</Link>
              <Link to='/MovieSearch' className='nav-item'>Movie Search</Link>
              <Link to='RentalLibrary' className='nav-item'>Rental Library</Link>
              <Link to='CustomerList' className='nav-item'>Customer List</Link>
            </div>
              <Checkout 
              currentCustomer={this.state.currentCustomer}
              currentMovie={this.state.currentMovie}
              />
          </nav>

          <Switch>
          <Route path="/Home">
              <Home/>
            </Route>
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

