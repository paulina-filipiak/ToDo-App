import styled from "styled-components"

const Input = styled.input`
  min-height: 20px;
  min-width: 20px;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  margin: 5px;
  border: 0.15em solid currentColor;
  border-radius: 0.15em;
  transform: translateY(-0.075em);
  :checked {
    border: 4px solid black;
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
