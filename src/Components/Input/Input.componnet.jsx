const Input = ({ addTodo, typeTodo, value }) => {
	return (
		<div className="flex flex-row">
			<input
				className="block w-full rounded-md border-0 pl-4 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:outline-gray-500 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6  placeholder:text-lg text-lg"
				type="text"
				onChange={typeTodo}
				placeholder="Type todo here"
				value={value}
			/>
			<button
				className="block rounded-md border-0 py-1.5 text-gray-300 ring-1 ring-inset bg-indigo-600 focus:outline-none focus:bg-indigo-600 hover:bg-indigo-400 text-lg "
				onClick={addTodo}>
				Add
			</button>
		</div>
	)
}

export default Input
