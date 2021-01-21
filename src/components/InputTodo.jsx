import React from "react";

const inputStyle = {
  backgroundColor: "steelblue",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "10px"
};

export const InputTodo = (props) => {
  console.log(props);

  const { todoText, onClick, onChange, disabled } = props;
  return (
    <div style={inputStyle}>
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        onChange={onChange}
        value={todoText}
      />
      <button isabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
