import React, { useState } from "react";

export default function FuncComp() {
  const [form, setForm] = useState({
    fName: "",
    lName: "",
    birthday: "",
    city: "",
  });
  return (
    <div className="container col-10">
      <div className="flex-column d-flex bg-warning border p-5">
        <input
          onChange={(e) => {
            setForm({ ...form, [e.target.name]: e.target.value });
          }}
          type="text"
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={(e) => {
            setForm({ ...form, [e.target.name]: e.target.value });
          }}
          type="text"
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={(e) => {
            setForm({ ...form, [e.target.name]: e.target.value });
          }}
          type="date"
          name="birthday"
          placeholder="Birthday"
        />
        <input
          onChange={(e) => {
            setForm({ ...form, [e.target.name]: e.target.value });
          }}
          type="text"
          name="city"
          placeholder="City"
        />
        <div className="btn btn-primary my-3">Submit</div>
      </div>
    </div>
  );
}
