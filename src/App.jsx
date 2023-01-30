import { useState } from "react"
import reactLogo from "./assets/react.svg"
import Layout from "./Components/Layout/Layout.component"
import "./App.css"
import ToDos from "./Components/ToDos/ToDos.component"
import ToDo from "./Components/ToDos/ToDo.component"
import Input from "./Components/Input/Input.componnet"

function App() {
  const [todos, setTodos] = useState([])
  const addTodo = (event) => {
    setTodos(event.target.value)
    console.log("value is:", event.target.value)
  }

  return (
    <Layout>
      <Input value={todos} addTodo={addTodo} />
      {/* <ToDos>{todos}</ToDos> */}
    </Layout>
  )
}

export default App
