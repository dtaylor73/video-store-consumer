import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import MovieResults from './MovieResults'
import './MovieSearch.css';

class MovieSearch extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movieTitle: '',
      results: [],
      error: ''
    }
  }

  
  getMovies = (movieTitle) => {

    axios.get(`http://localhost:3000/movies/?query=<${movieTitle}>`)
      .then((response) => {
        this.setState({ 
          results: Array.isArray(response.data) ? response.data : [ response.data ]
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message 
        });

        
      });
  }

  onInputChange = (event) => {
    const updatedState = {};

    const field = event.target.name;

    const value = event.target.value;


    updatedState[field] = value;
    this.setState(updatedState);

  }

  onSubmitHandler = (event) => {
    event.preventDefault();

    this.getMovies(
      this.state.movieTitle,
    )

    // state is already set when we get to this function. 

    this.setState({
      movieTitle: '',
    });
    // maybe this can hold the call to the method with the axios call
  }

  // addToRentalLibrary = (movieId) => {

  // }

  makeMovieResultsCollection () {
    const results = this.state.results.map((result, i) => {
      return <MovieResults
        title={result.title}
        id={result.id}
        overview={result.overview}
        image={result.image_url}
        key={i}
        // addToRentalLibraryCallback={this.addToRentalLibrary}
      />;
    }
    );
    return results
  }

  render() {
    return (
      <section>
        <h2>Movie Search</h2>

        <form onSubmit={this.onSubmitHandler} className='movieform'>

          <div>
            <div>
              <label className='' htmlFor="movieTitle">Movie Title: </label>
              <input className=''
                name="movieTitle"
                id="movieTitle"
                onChange={this.onInputChange}
                value={this.state.movieTitle}
              />
            </div>
          </div> 
          <input
            className='btn btn-primary'
            type='submit'
            name='submit'
            value='submit'
            // onClick={this.onSubmitHandler}
          />
        </form>
        <section className="search">
        {this.makeMovieResultsCollection()}
        </section>
      </section>
    );
  }
}

MovieSearch.propTypes = {

};

export default MovieSearch;