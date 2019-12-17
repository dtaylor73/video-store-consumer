import React, { Component } from 'react';
import Customer from './Customer';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Customer.css';

class CustomerList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      customers: []
    }
  }

  componentDidMount() {
    // componentDidMount is used to make sure the entire component is rendered. This axios call does not correspond, with an event
    // This axios call is used to get all the cards to load the board, so we need to make sure that the component fully renders
    // first. Axios calls are asynchronous so they can happen at any time. 


    axios.get('http://localhost:3000/customers')
      .then((response) => {
        this.setState({ 
          // setState replaces the initial value of cards
          customers: response.data 
        });
        // console.log(response.data)
      })
      .catch((error) => {
        this.setState({
          error: error.message 
        });
      });
  }

  makeCollection () {
    const customers = this.state.customers.map((customer) => {
      return <Customer
        name={customer.name}
        id={customer.id}
        address={customer.address}
        city={customer.city}
        state={customer.state}
        postal_code={customer.postal_code}
        phone={customer.phone}
        account_credit={customer.account_credit}
        movies_checked_out_count={customer.movies_checked_out_count}

        key={i}
      />;
      // what does deleteCard look like when its passed into deleteCardCallback
    }
    );
    return apiCards
  }

  render() {
    // console.log(this.props);
    return (
      <section className="card">
        
      </section>
    )
  }
}


Card.propTypes = {

};

export default Card;