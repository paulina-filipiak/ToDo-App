import { AddToDo } from "./Inputs.styled"

const Input = ({ addTodo, value }) => {
  return (
    <AddToDo
      type="text"
      value={value}
      onChange={addTodo}
      placeholder="Enter todo here"
    />
  )
}

export default Input
