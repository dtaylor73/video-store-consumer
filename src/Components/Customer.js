import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Customer = (props) => {

  return (
    <div className="customer">
      <div className="content">
        <div className="customer-info">{props.address}</div>
        <div className="customer-info">{props.city}, {props.state}</div>
        <div className="customer-info">{props.postal}</div>

        <div className="customer-info">{props.phone}</div>
        <div className="customer-info">${props.account_credit} account credit</div>
      </div>
    </div>
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
