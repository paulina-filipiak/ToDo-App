import { AddToDoInput } from "./Inputs.styled"

const Input = ({ addTodo, typeTodo, value }) => {
	return (
		<>
			<AddToDoInput
				type="text"
				onChange={typeTodo}
				placeholder="Type todo here"
				value={value}
			/>
			<button onClick={addTodo}>Add</button>
			{/* <button onClick={addTodo}>Add</button> */}
		</>
	)
}

export default Input
