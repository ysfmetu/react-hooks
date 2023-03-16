import React, { useState } from "react";
import AddNewTodo from "./addNewFile";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "get up the bed", id: 1 },
    { text: "go to work lab", id: 2 },
    { text: "continue the work", id: 3 },

  ]);
  const addTodo=(value)=>{
    setTodos([
        ...todos,
        {text:value,id:Math.random()}
    ]);
  }

  return (
  <div>
    <ul>
        {todos.map( todo =>{
            return(
                <li key={todo.id}>{todo.text}</li>
            );
        }

        )}
    </ul>
   <AddNewTodo  addTodo={addTodo}/>
  </div>

  );
};
export default TodoList;
