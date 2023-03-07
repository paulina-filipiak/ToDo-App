// import { preprocessCSS } from "vite"

const ToDo = ({ title, ...rest }) => {
	const markTodo = () => {
		console.log(`todo ${title} marked`)
	}
	return (
		<div className="flex flex-row">
			<input type="checkbox" />
			<h3>{title}</h3>
			<input type="checkbox" {...rest} />
		</div>
	)
}

export default ToDo
