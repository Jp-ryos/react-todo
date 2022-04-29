import React from "react";

export const CompletedTodo = (props) => {
  const { completedTodoList, onReject } = props;

  return (
    <div className="completed-todo">
      <h3>Comoleted TODOs</h3>
      {completedTodoList &&
        completedTodoList.map((e, index) => {
          return (
            <div key={`${e}--${index}`}>
              <p>{e}</p>
              <button onClick={() => onReject(index)}>Reject</button>
            </div>
          );
        })}
    </div>
  );
};
