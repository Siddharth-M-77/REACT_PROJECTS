import React, { useContext } from "react";
// import TodoApp from './components/Todo'
// import RegistrationForm from './components/RegistrationForm'
import RegistrationPageUsingRHF from "./components/RegistrationPageUsingRHF";
import FetchDataAndDisplayList from "./components/FetchDataAndDisplayList";
import FetchDataAndDisplayListWithPegination from "./components/FetchDataAndDisplayListWithPegination";
import Counter from "./components/Counter";
import { ThemeContext } from "./utils/ThemeContext";
import SimpleEcommerce from "./components/SimpleEcommerce";

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <div
      className={`w-screen h-screen transition-colors duration-300 ${
        theme === "dark"
          ? "dark bg-gray-800 text-white"
          : "bg-white text-gray-800"
      }`}
    >
      {/* <div className="flex items-center justify-end pt-10 pr-4 ">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 text-center  block bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded transition duration-200"
        >
          Toggle Theme
        </button>
      </div> */}

      {/* <TodoApp/> */}
      {/* <RegistrationForm/> */}
      {/* <RegistrationPageUsingRHF/> */}
      {/* <FetchDataAndDisplayList/> */}
      {/* <FetchDataAndDisplayListWithPegination/> */}
      {/* <Counter /> */}
      <SimpleEcommerce/>
    </div>
  );
};

export default App;
