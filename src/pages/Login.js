import { useState, useEffect, useRef } from "react"
import { useScript } from "../hooks/useScript"
import { collection, addDoc, setDoc, doc } from "firebase/firestore"
import jwt_deocde from "jwt-decode"
import { db } from "../firebase"

function Login({ user, setUser }) {
  const googlebuttonref = useRef()

  const onGoogleSignIn = async (user) => {
    let userCred = user.credential
    let payload = jwt_deocde(userCred)

    const docRef = await setDoc(doc(db, "users", payload.jti), {
      displayName: payload.name,
      email: payload.email,
      photoURL: payload.picture,
    })
    setUser(payload)

    console.log(user)
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
