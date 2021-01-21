import React from "react";

export const Complete = (props) => {
  const { todos, onClickReturn } = props;
  return (
    <div className="complete">
      <p className="title">完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickReturn(todo, index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
