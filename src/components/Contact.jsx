import React from "react";

const contacts = [
  {
    heading: "Email",
    text: "lalitkumar892001@gmail.com",
    icon: "envelope",
  },
  {
    heading: "Phone",
    text: "+91 93256 05510",
    icon: "telephone",
  },
];

function Contact() {
  return (
    <div className="contact">
      <h3>Contact Details</h3>
      <hr className="customHr" />
      <div className="contactBox">
        {contacts.map((contact, index) => {
          return (
            <div className="contactItem" key={index}>
              <strong>{contact.heading} : </strong>
              <i className={`bi bi-${contact.icon}`}></i>
              <span className="ms-2">{contact.text}</span>
              {console.log(contact.icon)}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Contact;
