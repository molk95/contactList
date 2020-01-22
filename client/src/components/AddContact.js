import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AddContact extends Component {
  render() {
    return (
      <div className="add-card">
        <p className="card-title-add">
          {this.props.contact.edit ? "Edit Contact" : "New Contact"}
        </p>
        <input
          name="name"
          type="text"
          placeholder="Name..."
          value={this.props.contact.name}
          onChange={this.props.hundleChange}
        />
        <input
          name="phone"
          type="text"
          placeholder="Phone..."
          value={this.props.contact.phone}
          onChange={this.props.hundleChange}
        />
        <input
          name="email"
          type="text"
          placeholder="Email..."
          value={this.props.contact.email}
          onChange={this.props.hundleChange}
        />
        <Link to="/contact-list">
          <input
            type="button"
            value={this.props.contact.edit ? "Save" : "Add Contact"}
            className="add-button"
            onClick={this.props.Action}
          />
        </Link>
      </div>
    );
  }
}
