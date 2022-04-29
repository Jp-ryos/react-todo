import React from "react";

export const CreateTodo = (props) => {
  const { val, onChange, onClick, validationFlag } = props;

  return (
    <div className="create-todo">
      <input
        placeholder="input todo..."
        value={val}
        onChange={onChange}
      ></input>
      <button onClick={onClick}>Add</button>
      {validationFlag && <p style={{ color: "red" }}>Please input todo</p>}
      <p> {val} </p>
    </div>
  );
};
