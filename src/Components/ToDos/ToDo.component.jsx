// import { preprocessCSS } from "vite"
import { SingleToDo } from "./Todos.styled"
import { Checkbox, Delete } from "../Input/Inputs.styled"

const ToDo = () => {
  return (
    <SingleToDo>
      <span>"Wyrzuć śmieci"</span>
      <div>
        <Delete type="checkbox" />
        <Checkbox type="checkbox" />
      </div>
    </SingleToDo>
  )
}

export default ToDo
