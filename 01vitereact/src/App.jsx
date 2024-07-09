import Test from "./test"


function App() {
  const username = 'React'

  // variables like username are injected within {} in return statement
  return (
    <>
    <Test/>
    <h1>Hello world This is {username}</h1> 
    <p>I am React</p>
    </>
  )
}

export default App
