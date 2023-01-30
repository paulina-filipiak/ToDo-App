import { useState } from "react"
import reactLogo from "./assets/react.svg"
import Layout from "./Components/Layout/Layout.component"
import "./App.css"
import ToDos from "./Components/ToDos/ToDos.component"

function App() {
  return (
    <Layout>
      <ToDos />
    </Layout>
  )
}

export default App
