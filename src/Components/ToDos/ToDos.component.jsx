import ToDo from "./ToDo.component"
import { AllToDos } from "./Todos.styled"

const ToDos = () => {
  return (
    <AllToDos>
      <ToDo />
      <ToDo />
      <ToDo />
      <ToDo />
      <ToDo />
    </AllToDos>
  )
}

export default ToDos
