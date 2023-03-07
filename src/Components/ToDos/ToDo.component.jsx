// import { preprocessCSS } from "vite"
import { SingleToDo, ToDoName } from "./Todos.styled"
import { Checkbox, Delete } from "../Input/Inputs.styled"

const ToDo = ({ title }) => {
	const removeTodo = () => {
		console.log(`todo ${title} removed`)
	}
	const markTodo = () => {
		console.log(`todo ${title} marked`)
	}
	return (
		<SingleToDo>
			<ToDoName>{title}</ToDoName>
			<div>
				<Delete type="checkbox" onClick={() => removeTodo()} />
				<Checkbox type="checkbox" onClick={() => markTodo()} />
			</div>
		</SingleToDo>
	)
}

export default ToDo
