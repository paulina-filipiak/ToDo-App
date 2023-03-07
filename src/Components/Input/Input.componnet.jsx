const Input = ({ addTodo, typeTodo, value }) => {
	return (
		<>
			<input
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
