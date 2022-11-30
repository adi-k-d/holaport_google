import { useState, useEffect, useRef } from "react"
import { useScript } from "../hooks/useScript"
import { collection, addDoc, setDoc, doc } from "firebase/firestore"
import jwt_deocde from "jwt-decode"
import { db } from "../firebase"
import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { Link, useNavigate } from "react-router-dom"

function Login() {
  const googlebuttonref = useRef()
  const navigate = useNavigate()
  const { user, setUser } = useContext(AuthContext)

  const onGoogleSignIn = async (user) => {
    let userCred = user.credential
    let payload = jwt_deocde(userCred)

    const docRef = await setDoc(doc(db, "users", payload.jti), {
      displayName: payload.name,
      email: payload.email,
      photoURL: payload.picture,
    })
    setUser(payload)
    navigate("/")
  }
  useScript("https://accounts.google.com/gsi/client", () => {
    window.google.accounts.id.initialize({
      client_id:
        "562152063232-hvodcukkgn5s8n9vgj4n84haq83on2bl.apps.googleusercontent.com",
      callback: onGoogleSignIn,
      auto_select: false,
    })

    window.google.accounts.id.renderButton(googlebuttonref.current, {
      size: "medium",
    })
  })
  return <div ref={googlebuttonref}></div>
}

export default Login
