import React from "react";

export default function TableComp(props) {
  return (
    <table class="table col-8 m-auto">
      <thead>
        <tr>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Date of birth</th>
          <th scope="col">City</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((form, index) => {
          return (
            <tr key={index + 1}>
              <td>{form.fName}</td>
              <td>{form.lName}</td>
              <td>{form.birthday}</td>
              <td>{form.city}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
