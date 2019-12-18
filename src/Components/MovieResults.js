import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// From the movie search page, I can search for a movie by title from the external API
// From the movie search results, I can add a movie from the search results to the rental library

class MovieResults extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      addedMovie: ''
    }


  }

  onSelectClick = (event) => {
    // pass in movie details to this method 
    // and then call the the addmovie function that will make the post request.
    this.addMovieToRentalLibrary({
      title: this.props.title,
      overview: this.props.overview,
      image: this.props.image
    })
    // console.log(this.props.title)
    // console.log(this.props.overview)
    // console.log(this.props.image)
  }

  addMovieToRentalLibrary = (movie) => {
    axios.post('http://localhost:3000/movies', movie)

    .then((response) => {
      console.log(response)
      {response.data.success ? this.setState({addedMovie: response.data.success}) : this.setState({addedMovie: response.data.failure})};
      // this.setState({
      //   addedMovie: response.data.success
      // });
    })
    .catch((error) => {
      // Use the same idea we had in our GET request
      this.setState({ error: error.message });
    });
  }

  render () {
    return (
      <div>
        <p>{this.props.title}</p>
        <p>{this.props.overview}</p>
        <img src={this.props.image}/>

        <button onClick={this.onSelectClick}>Add movie to rental library</button>
        {this.state.addedMovie}

      </div>
    );
  }
}


MovieResults.propTypes = {

};

export default MovieResults;