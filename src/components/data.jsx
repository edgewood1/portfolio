import React, { Component } from "react";
import Nav from "./nav";
import axios from "axios";

class Data extends Component {
  constructor() {
    // becasue embedded into a parent component, so call super()
    super();
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    axios
      .get("/users/data")
      // .then(res => res.json()
      .then(customers =>
        this.setState({ customers: customers.data }, () =>
          console.log("customers fetched.. ", this.state.customers)
        )
      );
  }

  render() {
    return (
      <div>
        <Nav />
        <h2> Customers </h2>
        <ul>
          {this.state.customers.map(customer => (
            <li key={customer.id}>{customer.username}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Data;
