import React, {Component} from "react";
import RentalLibrary from './components/RentalLibrary';
import MovieSearch from './components/MovieSearch';
// import CustomerList from './CustomerList';



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

