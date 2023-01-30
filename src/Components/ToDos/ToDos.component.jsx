import ToDo from "./ToDo.component"
import { AllToDos } from "./Todos.styled"
import App from "../../App"

const ToDos = ({ name, children }) => {
  const todosArray = [
    // <ToDo name="wyrzuc snmieci" />,
    // <ToDo name="umyj okna" />,
    // <ToDo name="zrob zakupy" />,
    // <ToDo name="poglaszcz pieska" />,
    // <ToDo name="zrob obiad" />,
  ]
  return <AllToDos></AllToDos>
  // return <AllToDos>{children}</AllToDos>
}

export default ToDos
