// import Post from "./components/Post/Post";

import { useEffect, useState } from "react"



// function App(props) {
//   return (
//     <div>
//       <Post button = "Это кнопка" text = "Some text"/>
//       <Post button = "Это кнопка другая" text = "Some text for test"/>
//       {/* <Post data={{"button": "Это кнопка другая", "text": "Some text for test"}} /> */}
//     </div>
//   );
// }

// import { Component } from "react";
// class App extends Component {
//   constructor (props) {
//     super(props)
//     this.f = props.value
//     // var...
//   }

//   componentDidUpdate () {

//   }

//   componentDidMount () {

//   }

//   render () {
//     this.f++
//     return (
//       <div>
//         {this.f}
//       </div>
//     )
//   }
// }

function App(props) {
  // var f = props.value
  
  const [hook, setHook] = useState(Number(props.value))
  const [test, setTest] = useState(1)

  useEffect(() => {
    console.log("change")
  }, [test, hook])

  function plus() {
    setHook(hook + 1)
    console.log(hook)
  }

  function minus() {
    setHook(hook - 1)
    console.log(hook)
  }

  function cl() {
    console.log("click")
    setTest(test + 1)
  }
  
  return (
    <div>
      <p>{hook}</p>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <button onClick={cl}>click</button>
    </div>
  )
}

export default App;
