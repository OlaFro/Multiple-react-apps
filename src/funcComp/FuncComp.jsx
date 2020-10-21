import React from "react";

export default function FuncComp() {
  return (
    <div className="container col-10">
      <div className="flex-column d-flex bg-warning border p-5">
        <input type="text" name="fName" placeholder="First Name" />
        <input type="text" name="lName" placeholder="Last Name" />
        <input type="date" name="birthday" placeholder="Birthday" />
        <input type="text" name="city" placeholder="City" />
        <div className="btn btn-primary my-3">Submit</div>
      </div>
    </div>
  );
}
