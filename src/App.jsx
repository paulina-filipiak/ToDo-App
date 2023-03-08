import { useState, useEffect } from "react"
import Layout from "./Components/Layout/Layout.component"
import "./App.css"
import Input from "./Components/Input/Input.componnet"
import ToDo from "./Components/ToDos/ToDo.component"
import { AllToDos } from "./Components/ToDos/Todos.styled"
import { v4 as uuidv4 } from "uuid"

function App() {
	const [inputValue, setInputValue] = useState("")
	const [todos, setTodos] = useState([])

	const inputHandler = (event) => {
		setInputValue(event.target.value)
		// console.log("value is:", event.target.value)
		// console.log("inputValue", inputValue)
	}

	const removeHandler = (index) => {
		const filteredTodos = todos.filter((_, i) => i !== index)
		console.log(filteredTodos)
		console.log(index)
		setTodos(filteredTodos)
	}

	const addButtonHandler = () => {
		// console.log("inputValue from add button handler", inputValue)
		setTodos([...todos, inputValue])
		console.log("todos array ze stanu", todos)
		setInputValue("")
	}

	return (
		<Layout>
			<Input
				typeTodo={inputHandler}
				addTodo={addButtonHandler}
				value={inputValue}
			/>
			<AllToDos className="flex flex-col gap-4">
				{todos.map((todo, index) => (
					<ToDo key={index} title={todo} onClick={() => removeHandler(index)} />
				))}
			</AllToDos>
		</Layout>
	)
}

export default App
