
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Checkout.css';

export default class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: undefined,
      checkoutMessage: ''
    }

  }
  checkOutMovie = () => {
    const due = new Date('December 17, 2020')
    axios.post(`http://localhost:3000/rentals/${this.props.currentMovie.title}/check-out`, { customer_id: this.props.currentCustomer.id, due_date: due})
   

      .then((response) => {
        const successCheckout = 'Your Movie has been checked out'
        console.log(successCheckout)

        this.setState({checkoutMessage: successCheckout})
      })
      .catch((error) => {

        this.setState({ error: error.message });

      });
  }


  render() {
    return(
      <section className="Checkout">
        <div className='Checkout-item'> Selected Customer: {this.props.currentCustomer.name}</div>
        <div className='Checkout-item'> Selected Movie: {this.props.currentMovie.title}</div>
        <button className='Checkout-button' type='button' onClick={this.checkOutMovie}>Checkout</button>
        <div className='white-text'>{this.state.checkoutMessage}</div>
      </section>
    )
  }
} 