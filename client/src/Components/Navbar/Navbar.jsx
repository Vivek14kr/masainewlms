import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./Navbar.css"

import { useAuth } from "../../Contexts/AuthContext";



function Navbar() {
  const navigate = useNavigate()
 
   const { logout } = useAuth();

   async function handleLogout() {
     try {
       await logout();
       navigate("/");
     } catch {}
   }
  const sendHome = ()=>{
    navigate("/")
  }
  return (
    <div>
      <div id="navbar">
        <img
          onClick={() => {
            sendHome();
          }}
          id="img"
          src="https://www.masaischool.com/img/navbar/logo.svg"
          alt=""
        />

        <Link className="linkk" to="/lectures">
          <p>Lectures</p>
        </Link>
        <Link className="linkk" to="/assignments">
          <p>Assignments</p>
        </Link>
        <Link className="linkk" to="/admin">
          <p>Admin</p>
        </Link>
        <p>Tickets</p>
        <p>Discussions</p>
        <p>Notification</p>
        <p>Electives</p>

        <div id="name">
          <p>Vivek Kumar</p>
        </div>
        <button id="logoutbtn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar