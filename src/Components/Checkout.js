
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
    checkoutMessage: ''
    }

  }
  checkOutMovie = () => {
    const due = new Date('December 17, 2020')
    const failCheckoutMovie = `You must select a movie and a customer to checkout!!!`
    if (!this.props.currentMovie || !this.props.currentCustomer){
      this.setState({ checkoutMessage: failCheckoutMovie });
    }
    else if (this.props.currentMovie && this.props.currentCustomer){
      axios.post(`http://localhost:3000/rentals/${this.props.currentMovie.title}/check-out`, { customer_id: this.props.currentCustomer.id, due_date: due })
        .then((response) => {
          const successCheckout = `Movie has been checked out`
          console.log(successCheckout)

          this.setState({ checkoutMessage: successCheckout })
          this.props.clearState()
        })
        .catch((error) => {
          this.setState({ error: error });
        });
    }; 
  }
  render() {
    return(
      <section>
        <h2> Checkout </h2>
        <p> Selected Customer: {this.props.currentCustomer.name}</p>
        <p> Selected Movie: {this.props.currentMovie.title}</p>
        <button className="button" type="button" onClick={this.checkOutMovie}>Check out</button>
        {this.state.checkoutMessage}
      </section>
    )
  }
} 