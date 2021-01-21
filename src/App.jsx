import React, { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { Incomplete } from "./components/Incomplete";
import { Complete } from "./components/Complete";

import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setImcompleteTodos] = useState([
    "あああ",
    "いいいい"
  ]);
  const [completeTodos, setCompleteTodos] = useState(["ううう"]);

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setImcompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setImcompleteTodos(newTodos);
    console.log(newTodos);
  };

  const onClickComplete = (todo, index) => {
    const newCompleteTodos = [...completeTodos, todo];
    setCompleteTodos(newCompleteTodos);

    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setImcompleteTodos(newTodos);
  };

  const onClickReturn = (todo, index) => {
    const newTodos = [...incompleteTodos, todo];
    setImcompleteTodos(newTodos);

    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるtodo5個までです🤫　消化してください😀
        </p>
      )}

      <Incomplete
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <Complete todos={completeTodos} onClickReturn={onClickReturn} />
    </>
  );
};
