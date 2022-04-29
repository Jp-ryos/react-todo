import "./styles.css";
import { CreateTodo } from "./components/CreateTodo";
import { NotStartedTodo } from "./components/NotStartedTodo";
import { CompletedTodo } from "./components/CompletedTodo";
import React, { useState } from "react";

export const App = () => {
  const [val, setVal] = useState("");
  const [validationFlag, setValidationFlag] = useState(false);
  const [notStartedTodos, setNotStartedTodo] = useState([]);
  const [completedTodos, setCompletedTodo] = useState([]);

  const onClickSubmitButton = () => {
    if (val === "") {
      setValidationFlag(true);
      return;
    }
    const reloadedTodos = [val, ...notStartedTodos];
    setNotStartedTodo(reloadedTodos);
    setVal("");
  };

  const onChangeTextBox = (e) => {
    setVal(e.target.value);
    setValidationFlag(false);
  };

  const onClickDeleteButton = (index) => {
    const todoList = [...notStartedTodos];
    todoList.splice(index, 1);
    setNotStartedTodo(todoList);
  };

  const onClickCompelteButton = (index) => {
    const completedTodoList = [...completedTodos, notStartedTodos[index]];
    setCompletedTodo(completedTodoList);

    const notStartedTodoList = [...notStartedTodos];
    notStartedTodoList.splice(index, 1);
    setNotStartedTodo(notStartedTodoList);
  };

  const onClickRejectButton = (index) => {
    const notStartedTodoList = [...notStartedTodos, completedTodos[index]];
    setNotStartedTodo(notStartedTodoList);

    const completedTodoList = [...completedTodos];
    completedTodoList.splice(index, 1);
    setCompletedTodo(completedTodoList);
  };

  return (
    <div className="App">
      <h1>TODO APP</h1>
      <CreateTodo
        val={val}
        validationFlag={validationFlag}
        onChange={onChangeTextBox}
        onClick={onClickSubmitButton}
      />
      <NotStartedTodo
        notStartedTodoList={notStartedTodos}
        onDelete={onClickDeleteButton}
        onComplete={onClickCompelteButton}
      />
      <CompletedTodo
        completedTodoList={completedTodos}
        onReject={onClickRejectButton}
      />
    </div>
  );
};
