import React from 'react'
import LoggedIn from "../LoggedIn";
import LogIn from "../Login";

const Home = ({loggedIn, login, facade, logout}) => {
    return (
        <div>
      {!loggedIn ?<LogIn login={login} facade={facade}/>: <div>Velkommen til CA2 opgaven</div>}
        </div>
    )
}

export default Home
