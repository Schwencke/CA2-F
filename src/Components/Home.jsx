import React from 'react'
import LoggedIn from "../LoggedIn";
import LogIn from "../Login";

const Home = ({loggedIn, login, facade, logout}) => {
    return (
        <div>
      {!loggedIn ?<LogIn login={login} facade={facade}/>: <div>
        <br/>
        <h1>VELKOMMEN TIL CA2 OPGAVEN</h1>
        </div>}
        </div>
    )
}

export default Home
