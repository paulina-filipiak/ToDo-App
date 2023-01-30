import styled from "styled-components"

export const SingleToDo = styled.div`
  font-size: 20px;
  min-width: 400px;
  min-height: 70px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #f1f1f1;
  align-items: center;
  padding: 10px;
  color: #323232;
`

export const AllToDos = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: column;
`

export const ToDoName = styled.span`
  color: #323232;
`
