import React from 'react'
// import TodoApp from './components/Todo'
// import RegistrationForm from './components/RegistrationForm'
import RegistrationPageUsingRHF from './components/RegistrationPageUsingRHF'
import FetchDataAndDisplayList from './FetchDataAndDisplayList'
import FetchDataAndDisplayListWithPegination from './FetchDataAndDisplayListWithPegination'

const App = () => {
  return (
    <div className='w-screen h-screen'>
      {/* <TodoApp/> */}
      {/* <RegistrationForm/> */}
      {/* <RegistrationPageUsingRHF/> */}
      {/* <FetchDataAndDisplayList/> */}
      <FetchDataAndDisplayListWithPegination/>

    </div>
  )
}

export default App
