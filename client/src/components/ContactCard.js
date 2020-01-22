import React from "react";
import { Link } from "react-router-dom";

export default function ContactCard({ contact, deleteContact, getPerson }) {
  return (
    <div className="contact-card">
      <p className="card-title">{contact.name}</p>
      <div className="card-text">
        <h4>Phone:</h4>
        <p>{contact.phone}</p>
        <h4>Email:</h4>
        <p>{contact.email}</p>
      </div>
      <div className="buttons">
        <Link to="/edite-contact">
          <input
            type="button"
            value="Edit"
            className="edit-button"
            onClick={() => getPerson(contact)}
          />
        </Link>

        <input
          type="button"
          value="Delete"
          className="edit-button"
          onClick={() => deleteContact(contact._id)}
        />
      </div>
    </div>
  );
}
