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
    <div className="w-screen h-screen bg-gradient-to-br from-indigo-700 to-purple-700 flex items-center justify-center p-5">
      <div className="max-w-xl rounded-lg shadow-lg p-8 bg-white w-full text-center">
        <h1 className="text-4xl font-semibold mb-6 text-gray-800">Todo List</h1>
        
        {/* Input and Add/Save Button */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <input
            type="text"
            value={inputVal}
            className="px-4 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
            onChange={handleInputChange}
            placeholder="Enter a task"
          />
          <button
            className={`px-6 py-2 rounded-lg text-white transition-all duration-300 ${
              editId ? "bg-blue-500 hover:bg-blue-600" : "bg-green-500 hover:bg-green-600"
            }`}
            onClick={editId ? saveTodo : addTodo}
          >
            {editId ? "Save" : "Add"}
          </button>
        </div>

        {/* Todo List */}
        <ul className="space-y-4">
          {todos.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition-colors duration-300"
            >
              <span className="text-lg font-medium text-gray-800">
                {item.text}
              </span>
              <div className="flex space-x-3">
                <button
                  onClick={() => editTodo(item.id, item.text)}
                  className="px-3 py-1 bg-yellow-400 text-yellow-900 rounded-md shadow hover:bg-yellow-500 transition-all duration-300"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTodo(item.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded-md shadow hover:bg-red-600 transition-all duration-300"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
