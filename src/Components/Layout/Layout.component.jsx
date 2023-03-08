import { Wrapper } from "./Layout.styled"
import HeaderStyled from "../Headers/Header.component"

const Layout = ({ children }) => {
	return (
		<div className="flex flex-col gap-4">
			<HeaderStyled text="ToDo App" />
			<main className="flex flex-col gap-4">{children}</main>
		</div>
	)
}

export default Layout
