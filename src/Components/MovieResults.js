import React, { Component } from 'react';
import PropTypes from 'prop-types';

// From the movie search page, I can search for a movie by title from the external API
// From the movie search results, I can add a movie from the search results to the rental library

const MovieResults = (props) => {
  
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.overview}</p>
      <img src={props.image}/>


      {/* <button onClick={this.onSelectClick}>Select</button> */}
    </div>
  )
}


MovieResults.propTypes = {

};

export default MovieResults;