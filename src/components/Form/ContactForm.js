import React from "react";
import FormElement from "./FormElement";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit}>

      <FormElement
        type="text"
        value={name}
        label="Name"
        id="name"
        handleChange={e => setName(e.target.value)} />


      <FormElement
        type="phone"
        value={phone}
        label="Phone"
        id="phone"
        handleChange={e => setPhone(e.target.value)}
      />

      <FormElement
        type="email"
        value={email}
        label="Email"
        id="email"
        handleChange={e => setEmail(e.target.value)}
      />

      <FormElement
        type="submit"
      />

    </form>
  );
};

