import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Customer = (props) => {

  return (
    
    <tr>
      <td> {props.name}</td>
      <td> {props.id}</td>
      <td> {props.address}</td>
      <td> {props.city}</td>
      <td>{props.state}</td>
      <td>{props.phone}</td>
      <td>${props.account_credit}</td>
      <button
        className="customer__select" onClick={props.customerNameCallback} type="button">Select</button>
    </tr>
  )
}

Customer.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  address: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  postal: PropTypes.string,
  phone: PropTypes.string,
  account_credit: PropTypes.number,
  created_at: PropTypes.instanceOf(Date),
};

export default Customer;
