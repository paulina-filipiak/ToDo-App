import ToDo from "./ToDo.component"
import { AllToDos } from "./Todos.styled"
import { v4 as uuidv4 } from "uuid"

const ToDos = ({ todos }) => {
	return (
		<AllToDos>
			{todos.map((todo) => (
				<ToDo key={uuidv4()} title={todo} />
			))}
		</AllToDos>
	)
}

export default ToDos
