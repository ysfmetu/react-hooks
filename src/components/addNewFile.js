import React, { useState } from "react";

const AddNewTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState("");
  
  const onFormSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text" value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      ></input>
      <input type="submit"></input>
    </form>
  );
};
export default AddNewTodo;
