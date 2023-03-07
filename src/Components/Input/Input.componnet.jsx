import { AddToDoInput } from "./Inputs.styled"

const Input = ({ addTodo, typeTodo }) => {
	return (
		<>
			<AddToDoInput
				type="text"
				onChange={typeTodo}
				placeholder="Type todo here"
			/>
			<button onClick={addTodo}>Add</button>
			{/* <button onClick={addTodo}>Add</button> */}
		</>
	)
}

export default Input
