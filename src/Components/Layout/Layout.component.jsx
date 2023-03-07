import { Wrapper } from "./Layout.styled"
import HeaderStyled from "../Headers/Header.component"

const Layout = ({ children }) => {
	return (
		<div>
			<HeaderStyled text="ToDo App" />
			<main>{children}</main>
		</div>
	)
}

export default Layout
