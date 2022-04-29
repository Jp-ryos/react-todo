import React from "react";

export const CreateTodo = (props) => {
  const { val, onChange, onClick, validationFlag } = props;

  return (
    <div className="create-todo">
      <input
        placeholder="ここにTODOを入力"
        value={val}
        onChange={onChange}
      ></input>
      <button onClick={onClick}>追加</button>
      {validationFlag && <p style={{ color: "red" }}>文字を入力してください</p>}
      <p> {val} </p>
    </div>
  );
};
