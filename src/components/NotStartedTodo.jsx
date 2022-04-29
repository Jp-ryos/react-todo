import React from "react";

export const NotStartedTodo = (props) => {
  const { notStartedTodoList, onDelete, onComplete } = props;

  return (
    <div className="not-started">
      <h3>未完了のTODO</h3>
      {notStartedTodoList &&
        notStartedTodoList.map((e, index) => {
          return (
            <div key={`${e}--${index}`}>
              <p>{e}</p>
              <button onClick={() => onComplete(index)}>完了</button>
              <button onClick={() => onDelete(index)}>削除</button>
            </div>
          );
        })}
    </div>
  );
};
