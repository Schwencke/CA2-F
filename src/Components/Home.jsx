import React from 'react'
import LoggedIn from "../LoggedIn";
import LogIn from "../Login";

const Home = ({loggedIn, login, facade, logout}) => {
    return (
        <div>
      {!loggedIn ? (<LogIn login={login} facade={facade}/>):
        (<div>
          
          <button onClick={logout}>Logout</button>
          <p>Role: {facade.getUserRoles()}</p>
        </div>)}
        </div>
    )
}

export default Home
