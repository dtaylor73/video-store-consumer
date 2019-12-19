import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';
import Checkout from './Checkout'

class RentalLibrary extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: []
    }

    console.log(this.state.movies)
  }

  componentDidMount() {  
    this.getMovies()
  }

  getMovies = () => {
    axios.get('http://localhost:3000/movies')
      .then((response) => {
        this.setState({ 
          // setState replaces the initial value of cards
          movies: response.data 
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message 
        });
      });
  }

  selectMovie = (movie) => {
    return this.props.selectMovieApp(movie)
  }

  makeMovieCollection () {
    const movies = this.state.movies.map((movie, i) => {
      return <Movie
        title={movie.title}
        id={movie.id}
        overview={movie.overview}
        inventory={movie.inventory}
        key={i}
        onSelectClickCallback={this.selectMovie}
      />;
      console.log(movies)
    }
    );
    return movies
  }

  render() {
    return (
      <section>
        <h2>Rental Library</h2>
        <section className="rentals">
        {this.makeMovieCollection()}
        </section>
      </section>
    )
  }
}


RentalLibrary.propTypes = {

};

export default RentalLibrary;
