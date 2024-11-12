import React, { useState } from "react";

const Todo = () => {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);

  // Function to handle input value change
  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  // Function to add a new todo
  const addTodo = () => {
    if (inputVal.trim()) {
      setTodos([...todos, { id: Date.now(), text: inputVal }]);
      setInputVal(""); // Clear input field
    }
  };

  // Function to save the edited todo
  const saveTodo = () => {
    if (inputVal.trim() && editId) {
      setTodos(
        todos.map((item) =>
          item.id === editId ? { ...item, text: inputVal } : item
        )
      );
      setEditId(null);
      setInputVal(""); // Clear input field
    }
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  // Function to initiate editing a todo
  const editTodo = (id, text) => {
    setEditId(id);
    setInputVal(text); // Set input field to the text of the todo being edited
  };

  return (
    <div className="w-screen h-screen bg-gray-700 flex items-center justify-center">
      <div className="max-w-xl rounded-md p-10 shadow-lg bg-white w-full text-center">
        <h1 className="text-5xl mb-10">Todo List</h1>
        <div className="flex items-center justify-center gap-5">
          <input
            type="text"
            value={inputVal}
            className="px-10 py-2 border border-cyan-300"
            onChange={handleInputChange}
            placeholder="Enter todo"
          />
          <button
            className="px-10 rounded-lg py-2 bg-gray-400 text-white hover:bg-orange-400 min-w-fit"
            onClick={editId ? saveTodo : addTodo}
          >
            {editId ? "Save" : "Add Todo"}
          </button>
        </div>
        <div className="list">
          <ul>
            {todos.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-black mt-8"
              >
                <li className="p-4 flex-1 text-start rounded-lg text-xl uppercase mt-5 text-white">
                  {item.text}
                </li>
                <div>
                  <button
                    onClick={() => deleteTodo(item.id)}
                    className="px-4 py-1 bg-red-500 rounded-lg hover:bg-red-700 cursor-pointer mx-1 text-white"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => editTodo(item.id, item.text)}
                    className="px-4 py-1 bg-yellow-500 rounded-lg hover:bg-yellow-700 cursor-pointer text-white"
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
