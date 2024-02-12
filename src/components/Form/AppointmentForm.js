import React, { useMemo } from "react";
import FormElement from "./FormElement";
import { ContactPicker } from "./ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const contactNames = useMemo(() => {
    return contacts.map((contact) => contact.name);
  }, [contacts]);

  return (
    <form onSubmit={handleSubmit}>
      <FormElement
        id="name"
        type="text"
        value={title}
        handleChange={(e) => setTitle(e.target.value)}
        label="Appointment Name"
      />

      <ContactPicker
        name="contact"
        value={contact}
        contacts={contactNames}
        onChange={(e) => setContact(e.target.value)}
      />

      <FormElement
        type="date"
        name="date"
        label="Date"
        min={getTodayString()}
        value={date}
        handleChange={e => setDate(e.target.value)}
      />

      <FormElement
        type="time"
        name="time"
        value={time}
        handleChange={e => setTime(e.target.value)}
        label="Time"
      />

      <FormElement
        type="submit"
      />

    </form>
  );
};
