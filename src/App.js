import "./App.css"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import Login from "./pages/Login"
import { useState, useEffect } from "react"
import Header from "./components/Header"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/upload" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </>
  )
}

export default App
