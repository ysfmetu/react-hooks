import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "get up the bed", id: 1 },
    { text: "go to work lab", id: 2 },
    { text: "continue the work", id: 3 },

  ]);

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
  </div>
  );
};
export default TodoList;
