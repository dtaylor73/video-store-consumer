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
      currentMovie: ''
    };
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
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/MovieSearch">Movie Search</Link>
              </li>
              <li>
                <Link to="/RentalLibrary">Rental Library</Link>
              </li>
              {/* <li>
                <Link to="/CustomerList">CustomerList</Link>
              </li> */}
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          {/*This means that you should put <Route>s with more specific (typically longer) paths before 
          less-specific ones*/}
          <Switch>
            <Route path="/MovieSearch">
              <MovieSearch />
            </Route>
            <Route path="/RentalLibrary">
              <RentalLibrary selectMovieApp={this.selectMovieApp}/>
            </Route>
            {/* <Route path="/CustomerList" component={CustomerList}>
              <CustomerList />
            </Route> */}
          </Switch>
        </div>
      </Router>
    );
  };
}


export default App;

