import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// A function like this can be rendered directly same as App() imported earlier
function MyApp(){
  return (
      <div>
          <h1>Custom App !</h1>
      </div>
  )
}

// creation of a simple object is not rendered directly by React
// as it has its own implementation of the render() method

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

// Although the above syntax will not be rendered by React but the below one will get rendered
const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)


const anotherUser = "JavaScript"

// adding element using createElement() that is injected directly by a transpiler called "Babel"
const reactElement = React.createElement(
  'a',
  {href : 'https://google.com',target : '_blank'},
  'click me to visit google',
  // variables are injected after the whole tree structure is defined
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  // <App/>
  // <MyApp/>
  reactElement
  
)
