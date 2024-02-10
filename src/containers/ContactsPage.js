import React, { useState, useEffect } from "react";

import { ContactForm } from "../components/Form/ContactForm";
import { TileList } from "../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length !== 0 && phone.length !== 0 && email.length !== 0) {
      if (contacts.some((person) => person.name === name)) {
        alert("You cant add same error!")
      } else {
        addContact(name, phone, email)
        setName("")
        setEmail("")
        setPhone("")
      }
    }
  };

  useEffect(() => {

    console.log(contacts)
  }, [contacts])

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={contacts} type="contact" />
      </section>
    </div>
  );
};
