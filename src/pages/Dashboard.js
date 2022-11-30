import {
  collection,
  query,
  where,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore"
import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import PostForm from "../components/PostForm"

import { AuthContext } from "../context/AuthContext"

function Dashboard() {
  const navigate = useNavigate()

  const [posts, setposts] = useState([])

  const { user, setUser } = useContext(AuthContext)

  return (
    <>
      <section className="heading">
        <h1>Welcome {user.email}</h1>
        <p>Write A Post</p>
      </section>

      <PostForm />
    </>
  )
}

export default Dashboard
