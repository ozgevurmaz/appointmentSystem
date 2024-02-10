import React, { useState } from "react";

import { AppointmentForm } from "../components/Form/AppointmentForm";
import { TileList } from "../components/tileList/TileList";

export const AppointmentsPage = ({
  appointments,
  addAppointment,
  contacts
}) => {
  const [name,setName]=useState("")
  const [contact,setContact]=useState([])
  const [date,setDate]=useState("")
  const [time,setTime]=useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(name, contact, date, time);
    setName("");
    setContact("");
    setDate("");
    setTime("");
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
        contacts={contacts}
        contact={contact}
        setContact={setContact}
        title={name}
        setTitle={setName}
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList data={appointments} />
      </section>
    </div>
  );
};