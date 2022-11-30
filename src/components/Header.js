import { FaSignInAlt, FaSignOutAlt, FaUser, FaUpload } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"

function Header() {
  const navigate = useNavigate()
  const { user, setUser } = useContext(AuthContext)

  const onLogout = () => {
    setUser(null)
    navigate("/")
  }
  console.log(user)

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Daily Posts</Link>
      </div>
      <ul>
        {user ? (
          <>
            <li>
              <button className="btn" onClick={() => onLogout()}>
                <FaSignOutAlt /> Logout
              </button>
            </li>
            <li>
              <button className="btn" onClick={() => navigate("/upload")}>
                <FaUpload /> Upload Post
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">
                <FaSignInAlt /> Login
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header
