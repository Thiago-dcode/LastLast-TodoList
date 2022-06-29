import React from "react";

import { GetDate } from "./GetDate";

const AddTodo = ({ getInput, handleInput, getDateInput }) => {
  return (
    <div className="input">
      <input
        id="input"
        onChange={(e) => {
          getInput(e.target.value.trim());
        }}
        type="text"
        placeholder="What do you have to do?"
      />
      <input
        onChange={(e) => {
          getDateInput(e.target.value);
        }}
        type="date"
        placeholder="date"
        name=""
        id=""
        min={GetDate("min")}
      />
      <button onClick={handleInput}>ADD</button>
    </div>
  );
};

export default AddTodo;
