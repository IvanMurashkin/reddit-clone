import React, { ReactElement } from "react"
import Header from "./components/Header"

const App = (): ReactElement => {
  return (
    <div className="app">
      <Header />
      <div className="posts"></div>
      <div className="sidebar"></div>
    </div>
  )
}

export default App
