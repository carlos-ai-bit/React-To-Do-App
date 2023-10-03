/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 ">Todo List</h1>
      <div className="flex mb-4 text-center">
        <input
          type="text"
          className="border border-blue-500 rounded-l py-2 px-4"
          placeholder="Enter a new to do"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r ml-6"
          onClick={handleAddTodo}
        >
          Add Todo
        </button>
      </div>
      <ul className="list-disc pl-8">
        {todos.map((todo, index) => (
          <li className="flex items-center mb-2" key={index}>
            <span className="flex-grow">{todo}</span>
            <button
              className="bg-red-600 hover:bg-red-600 text-white font-bold py-1 px-2 rounded mr-80"
              onClick={() => handleDeleteTodo(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
