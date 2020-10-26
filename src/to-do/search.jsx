import React from "react";

export default function Search(props) {
  return (
    <div>
      <input
        placeholder="search for task"
        onChange={(e) => {
          props.filterTask(e.target.value);
        }}
      />
    </div>
  );
}
