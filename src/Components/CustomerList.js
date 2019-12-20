import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Customer from './Customer.js';
import './CustomerList.css';
export default class CustomerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: []
    } 
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
          customerNameCallback={() => this.props.customerNameCallback(customer)}
        />
        
      );
    });

    return (
      <table class="table">
        <thead>
          <tr>
            <th id="customer-list-header">Customer List</th>
          </tr>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Id</th>
            <th scope="col">Address</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Phone</th>
            <th scope="col">Account_credit</th>
            <th scope="col">Select</th>
          </tr>
        </thead>

        <tbody className='blue-text'>
          {customers}
        </tbody>
    </table>
    )
  }
}

CustomerList.propTypes = {
};
