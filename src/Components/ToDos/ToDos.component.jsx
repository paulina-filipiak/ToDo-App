import ToDo from "./ToDo.component"

import { v4 as uuidv4 } from "uuid"

const ToDos = ({ todos, clickHandle, key, ...rest }) => {
	// const removeHandler = (index) => {
	// 	const filteredTodos = todos.filter((_, i) => i !== index)
	// 	console.log(filteredTodos)
	// }

	return (
		<div>
			{todos.map((todo, index) => (
				<ToDo key={index} title={todo} {...rest} />
			))}
		</div>
	)
}

export default ToDos
