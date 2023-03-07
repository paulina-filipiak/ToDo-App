import { useState, useEffect } from "react"
import Layout from "./Components/Layout/Layout.component"
import "./App.css"
import ToDos from "./Components/ToDos/ToDos.component"
import Input from "./Components/Input/Input.componnet"

function App() {
	const [inputValue, setInputValue] = useState("")
	const [todos, setTodos] = useState([])

	const inputHandler = (event) => {
		setInputValue(event.target.value)
		// console.log("value is:", event.target.value)
		// console.log("inputValue", inputValue)
	}

	const addButtonHandler = () => {
		// console.log("inputValue from add button handler", inputValue)
		setTodos([...todos, inputValue])
		console.log("todos array ze stanu", todos)
		setInputValue("")
	}

	return (
		<Layout>
			<Input typeTodo={inputHandler} addTodo={addButtonHandler} />
			<ToDos todos={todos} />
		</Layout>
	)
}

export default App
