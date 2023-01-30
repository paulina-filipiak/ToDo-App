import { Wrapper } from "./Layout.styled"
import HeaderStyled from "../Headers/Header.component"

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <HeaderStyled text="ToDo App" />
      <main>{children}</main>
    </Wrapper>
  )
}

export default Layout
