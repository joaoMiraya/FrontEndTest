import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import './App.css'

import Posts from "./components/pages/Post";
import Users from "./components/pages/Users";
import Header from "./components/patterns/Header";
import Footer from "./components/patterns/Footer";
function App() {


  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const [postsResponse, userResponse] = await Promise.all([
        axios.get("https://jsonplaceholder.typicode.com/posts"),
        axios.get("https://jsonplaceholder.typicode.com/users"),

      ]);
      setPosts(postsResponse.data);
      setUsers(userResponse.data);
    }
    fetchData();
  }, [])

  const usersRef = useRef();

  function openUsers() {
    usersRef.current.classList.toggle('hidden')
  }

  return (
    <>
      <Header />

      <div className="container flex flex-row-reverse h-screen">

        <Posts posts={posts} users={users} />


        <div ref={usersRef} className="hidden sm:flex flex-col border-solid border-2 w-[300px] min-w-[300px] text-center border-gray-400 p-4 m-2 overflow-scroll ">

          <h1 className="text-2xl font-bold">Usuarios</h1>
          <Users users={users} />

        </div>
        <div>
          <button onClick={openUsers} className="bg-black rounded-sm text-white px-2 m-2 sm:hidden">Usuarios</button>
        </div>
      </div>

      <Footer />

    </>
  )
}

export default App;