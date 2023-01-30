import styled from "styled-components"

const Input = styled.input`
  min-height: 20px;
  min-width: 20px;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  margin: 5px;
  border: 1px solid #323232;
  border-radius: 0.15em;
  transform: translateY(-0.075em);
  :checked {
    border: 4px solid #323232;
  }
`

export const Checkbox = styled(Input)`
  :checked {
    background: green;
  }
`

export const Delete = styled(Input)`
  border: 0px;
  background-color: red;
  /* background: no-repeat url("../../Design/x-symbol.svg");
  fill: red; */
`

export const AddToDo = styled.input`
  background-color: #f1f1f1;
  font-size: 20px;
  min-width: 400px;
  min-height: 70px;
  align-items: center;
  padding: 10px;
  color: #323232;
  box-sizing: border-box;
`
