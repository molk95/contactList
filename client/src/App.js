import React, { Component } from "react";
import "./App.css";
import { Link, Switch, Route } from "react-router-dom";
import ContactCard from "./components/ContactCard";
import AddContact from "./components/AddContact";
import axios from "axios";

export default class App extends Component {
  state = {
    contacts: [],
    name: "",
    phone: "",
    email: "",
    id: "",
    edit: false
  };

  componentDidMount = () => {
    this.getAllContacts();
  };

  getAllContacts = () => {
    axios.get("/contacts").then(res => this.setState({ contacts: res.data }));
  };

  addContact = () => {
    axios
      .post("/addcontact", {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone
      })
      .then(this.getAllContacts);
    this.reset();
  };

  deleteContact = id => {
    axios
      .delete(`/deletecontact/${id}`)
      .then(this.getAllContacts)
      .catch(err => console.log(err));
  };

  editContact = () => {
    axios
      .put(`/updatecontact/${this.state.id}`, {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone
      })
      .then(this.getAllContacts);
    this.reset();
  };

  getPerson = contact => {
    this.setState({
      name: contact.name,
      phone: contact.phone,
      email: contact.email,
      id: contact._id,
      edit: true
    });
  };

  reset = () => {
    this.setState({
      name: "",
      phone: "",
      email: ""
    });
  };

  hundleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div>
        <div>
          <h1>Contact App</h1>
          <Link to="/contact-list">
            <button className="button">Contact List</button>
          </Link>
          <Link to="/ajouter-contact">
            <button
              className="button"
              onClick={() => this.setState({ edit: false })}
            >
              Add Contact
            </button>
          </Link>
        </div>
        <Switch>
          <Route
            path="/contact-list"
            render={() => (
              <div className="contact-list">
                {this.state.contacts.map(el => (
                  <ContactCard
                    contact={el}
                    deleteContact={this.deleteContact}
                    getPerson={this.getPerson}
                  />
                ))}
              </div>
            )}
          />
          <Route
            path="/(ajouter-contact|edite-contact)/"
            render={() => (
              <AddContact
                hundleChange={this.hundleChange}
                Action={this.state.edit ? this.editContact : this.addContact}
                contact={this.state}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}
