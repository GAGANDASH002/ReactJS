import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // This is a hook responsible for change of state
  // setCounter is a method that is reponsible for the updation of variable 'counter'.
  let [counter , setCounter] = useState(5)

  // This variable will always be updated but not genereated on the UI
  // that is why we need a hook called useState() with a default value of 5.

  // let counter = 5 

  const addValue = () => {
      counter = counter + 1
      setCounter(counter)
  }


  const removeValue = () =>{
      if(counter == 0){
        setCounter(0)
      }
      else{
      setCounter(counter - 1)
      }
  }

  return (
    <>
      <h1>This is a Counter</h1>
      <h2>Counter value : {counter}</h2>
      <button
      onClick={addValue}
      >Add Value </button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value </button>
    </>
  )
}

export default App


// UI updation is always controlled by React whereas
// variable updation is controlled by JS.