import ToDo from "./ToDo.component"
import { AllToDos } from "./Todos.styled"
import { v4 as uuidv4 } from "uuid"

const ToDos = ({ todos, clickHandle, key, ...rest }) => {
	// const removeHandler = (index) => {
	// 	const filteredTodos = todos.filter((_, i) => i !== index)
	// 	console.log(filteredTodos)
	// }

	return (
		<AllToDos>
			{todos.map((todo, index) => (
				<ToDo key={index} title={todo} {...rest} />
			))}
		</AllToDos>
	)
}

export default ToDos
