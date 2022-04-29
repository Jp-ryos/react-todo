import React from "react";

export const NotStartedTodo = (props) => {
  const { notStartedTodoList, onDelete, onComplete } = props;

  return (
    <div className="not-started">
      <h3>Not Started TODOs</h3>
      {notStartedTodoList &&
        notStartedTodoList.map((e, index) => {
          return (
            <div key={`${e}--${index}`}>
              <p>{e}</p>
              <button onClick={() => onComplete(index)}>Complete</button>
              <button onClick={() => onDelete(index)}>Delete</button>
            </div>
          );
        })}
    </div>
  );
};
