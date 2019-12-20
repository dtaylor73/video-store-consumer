import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Movie extends Component {

  constructor(props) {
    super(props);

  }

  onSelectClick = () => {
    return this.props.onSelectClickCallback(this.props)
  }

  render() {
    console.log(this.props)
    return (
      
      <div className="card">
          <div className="card-body">
          <h5>{this.props.title}</h5>
          <p>{this.props.overview}</p>
          <button onClick={this.onSelectClick}>Select</button>
          </div>
     </div>
    )
  }
}


Movie.propTypes = {

};

export default Movie;