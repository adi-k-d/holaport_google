import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import Login from "./pages/Login"
import { useState, useEffect } from "react"

function App() {
  const [user, setUser] = useState(null)
  return (
    <div className="App">
      <Login user={user} setUser={setUser} />
      <Home user={user} />
      <Dashboard user={user} />
    </div>
  )
}

export default App
