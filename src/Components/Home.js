import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieLogo from '../movie-pilot.svg';


const Home = (props) => {

  return (
    <div className="movie-container">
      <center><img className='movie-logo' src={MovieLogo}></img></center>
    </div>
  )
}

export default Home;