// import { preprocessCSS } from "vite"
import { SingleToDo, ToDoName } from "./Todos.styled"
import { Checkbox, Delete } from "../Input/Inputs.styled"

const ToDo = ({ title, ...rest }) => {
	const markTodo = () => {
		console.log(`todo ${title} marked`)
	}
	return (
		<SingleToDo>
			<ToDoName>{title}</ToDoName>
			<div>
				<Delete type="checkbox" {...rest} />
				<Checkbox type="checkbox" />
			</div>
		</SingleToDo>
	)
}

export default ToDo
