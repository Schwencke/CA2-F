import React, { useState,useEffect } from "react"
import Facade from "./apiFacade";
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Company from "./Components/Valutaberegner"
import Header from "./Components/Header"
import Home from "./Components/Home"
import Products from "./Components/Products"
import './App.css'
import { Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
 
function App() {
  const [loggedIn, setLoggedIn] = useState(false)
 
  const logout = () => { Facade.logout()
    setLoggedIn(false)} 

  const login = (user, pass) => {

    Facade.login(user,pass)
 .then(res =>setLoggedIn(true));
  } 
 
  return (
    <Container>
      <Router>
        <Header facade={Facade} loggedIn={loggedIn}/>
        <Switch>
          <Route exact path="/">
          <Home loggedIn={loggedIn} login={login} facade={Facade} logout={logout}
          />
          </Route>
          <Route exact path="/Valutaberegner">
            {Facade.hasUserAccess('user', loggedIn) &&
          <Company facade={Facade} // props for company
          />}
          </Route>
          <Route exact path="/Products">
            {Facade.hasUserAccess('admin', loggedIn) &&
          <Products facade={Facade} // props for company
          />}
          </Route>
      
        </Switch>
        </Router>
    </Container>
  )
 
}
export default App;
