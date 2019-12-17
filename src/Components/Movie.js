import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Movie extends Component {

  constructor(props) {
    super(props);

  }

  onSelectClick = () => {
    console.log('hello')
    console.log(this.props)
    return this.props.onSelectClickCallback(this.props)
  }

  

  render() {
    return (
      <section>
        <p>{this.props.title}</p>
        <p>{this.props.overview}</p>
        <button onClick={this.onSelectClick}>Select</button>
      </section>
    )
  }
}


Movie.propTypes = {

};

export default Movie;