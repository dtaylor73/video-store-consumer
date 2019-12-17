import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Customer from './Customer.js';
export default class CustomerList extends Component {
  constructor() {
    super();

    this.state = {
      customers: []
    };
  }
  
  componentDidMount() {
    this.getCustomers()
  }

  getCustomers = () => {
    axios.get('http://localhost:3000/customers')
      .then((response) => {
        console.log(response)
        this.setState({
          customers: response.data
        });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }
     
  render() {
    const customers = this.state.customers.map((customer) => {
      return (
        <Customer
          key = {customer.id}
          name = {customer.name}
          id = {customer.id}
          address = {customer.address}
          city = {customer.city}
          state = {customer.state}
          postal_code = {customer.postal_code}
          phone = {customer.phone}
          account_credit = {customer.account_credit}
          movies_checked_out_count = {customer.movies_checked_out_count}
        />
      );
    });

    return (
      <div>
        {customers}
      </div>
    )
  }
}

CustomerList.propTypes = {
};