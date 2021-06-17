import React, { useEffect } from "react";
import { StoreProvider, useStoreContext } from "./utils/GlobalState";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import { NavBar } from './components'
import { Login, Home, Dashboard, LocationDetail } from './pages'
import { useState } from 'react'



function App() {
  // let [authToken, updateAuthToken] = useState(false)
  //Going to store auth data and login data on initial login.
  const [loginState, setLoginCred] = useState({
    _id: "",
    authToken: "",
    loggedIn: localStorage.getItem("loggedIn")

  });

  useEffect(() => {
  }, [loginState.authToken]);


  // <NavBar />
  return (
    <Router>
      <StoreProvider>
        <NavBar 
        logout={()=>{
          localStorage.clear();
          window.location.href ="/login"
        }}
        />
        <Switch>
          <Route exact path='/'>
            {loginState.loggedIn ? <Redirect to="/dashboard" /> : <Home
              setLogin={(data) => {
                localStorage.setItem("authToken", data.token)
                localStorage.setItem("userId", data.user._id)
                localStorage.setItem("loggedIn", true)
                setLoginCred({
                  _id: data.user._id,
                  authToken: data.token,
                  loggedIn: true
                })
              }} />}
    
          </Route>
       
          <Route exact path='/supersecretroutethisrouteissoooosecretthatyouwouldneverfinditbylookingelephantdidyouseehowelephantisinarandomplacethatmakesnosensethatmakesthisrouteevenhardertofind'>
            <h1>SECRET</h1>
          </Route>
          <Route exact path='/dashboard'>
            {!loginState.loggedIn ? <Redirect to="/login" /> : <Dashboard />}
          </Route>
          <Route exact path='/login'>
            {loginState.loggedIn ? <Redirect to="/dashboard" /> : <Login
              setLogin={(data) => {
                localStorage.setItem("authToken", data.token)
                localStorage.setItem("userId", data.user._id)
                localStorage.setItem("loggedIn", true)
                setLoginCred({
                  _id: data.user._id,
                  authToken: data.token,
                  loggedIn: true
                })
              }} />}
          </Route>
          {/* <Route exact path="/logout"></Route> */}
          <Route exact path="/locations/:id" component={LocationDetail} />
        </Switch>
      </StoreProvider>
    </Router>
  );
}

export default App;