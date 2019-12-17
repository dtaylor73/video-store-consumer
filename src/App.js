import React from "react";
import Movie from './MovieLibrary';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Movie Search">Movie Search</Link>
            </li>
            <li>
              <Link to="/Movie Library">Movie Library</Link>
            </li>
            <li>
              <Link to="/Customers">Customers</Link>
            </li>
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
          <Route path="/MovieLibrary">
            <MovieLibrary />
          </Route>
          <Route path="/Customers" component={Customers}>
            <Customers />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// function MovieSearch() {
//   return <h2>MovieSearch</h2>;
// }

// function MovieLibrary() {
//   return <h2>MovieLibrary</h2>;
// }

// function Customers() {
//   return <h2>Customers</h2>;
// }
