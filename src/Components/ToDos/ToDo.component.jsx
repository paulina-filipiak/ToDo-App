// import { preprocessCSS } from "vite"
import { SingleToDo, ToDoName } from "./Todos.styled"
import { Checkbox, Delete } from "../Input/Inputs.styled"
import ToDos from "./ToDos.component"

const ToDo = ({ name }) => {
  const removeTodo = () => {}
  const markTodo = () => {}
  return (
    <SingleToDo key={name}>
      <ToDoName>{name}</ToDoName>
      <div>
        <Delete type="checkbox" onClick={removeTodo} />
        <Checkbox type="checkbox" onClick={markTodo} />
      </div>
    </SingleToDo>
  )
}

export default ToDo
