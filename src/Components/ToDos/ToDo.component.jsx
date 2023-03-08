// import { preprocessCSS } from "vite"

const ToDo = ({ title, ...rest }) => {
	const markTodo = () => {
		console.log(`todo ${title} marked`)
	}
	return (
		<div className="w-full flex flex-row  rounded-md bg-indigo-900 border-0 pl-4 pr-4 py-4 text-gray-300 ring-1 sm:text-sm sm:leading-6  my-1 justify-between">
			<button type="checkbox">Completed</button>
			<h3 className="text-lg">{title}</h3>
			<button
				type="checkbox"
				{...rest}
				className="block rounded-md border-red-500 py-1 text-gray-300 ring-1 ring-inset bg-indigo-600 focus:outline-none focus:bg-indigo-600 hover:bg-indigo-400 text-sm ">
				Delete
			</button>
		</div>
	)
}

export default ToDo
