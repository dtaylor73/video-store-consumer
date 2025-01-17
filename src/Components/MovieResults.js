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
    this.addMovieToRentalLibrary({
      title: this.props.title,
      overview: this.props.overview,
      image: this.props.image
    })
  }

  addMovieToRentalLibrary = (movie) => {
    axios.post('http://localhost:3000/movies', movie)

    .then((response) => {
      console.log(response)
      {response.data.success ? this.setState({addedMovie: response.data.success}) : this.setState({addedMovie: response.data.failure})};
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }

  render () {
    return (


        <div className="card">
          <img className="card-img-top" src={this.props.image}/>
          <div className="card-body">
            <p>{this.props.title}</p>
            <p>{this.props.overview}</p>
            <button className='btn btn-primary' onClick={this.onSelectClick}>Add movie to rental library</button>
            <p className='message'>{this.state.addedMovie}</p>
          </div>
        </div>
    );
  }
}

export default MovieResults;

